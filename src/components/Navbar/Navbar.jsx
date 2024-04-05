import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { query, collection, orderBy, getDocs } from 'firebase/firestore';
import CartWidget from '../CartWidget/CartWidget';
import { db } from '../../services/firebaseConfig';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(db, 'categories');
        const querySnapshot = await getDocs(categoriesCollection);
        const categoriesData = querySnapshot.docs.map(doc => doc.data());
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <BootstrapNavbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src="../src/assets/img/logo.png" alt="Mateados" />
        </Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav>
            {categories.map(cat => (
              <Nav.Link key={cat.slug} as={Link} to={`/category/${cat.slug}`}>{cat.name}</Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
        <CartWidget urlImg="../src/assets/img/cart.svg" cantidad={'0'} />
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
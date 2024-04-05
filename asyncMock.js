const products = [
    {
        id: '1',
        name: 'Termo Stanley',
        price: 2500,
        category: 'Termos',
        img: 'https://charruastore.com.uy/wp-content/uploads/2023/09/ZE0136-1.jpg',
        stock: 25,
        description: 'Descripción termo Stanley',
    },

    {
        id: '2',
        name: 'Mate Stanley',
        price: 1200,
        category: 'Mates',
        img: 'https://charruastore.com.uy/wp-content/uploads/2023/09/orig_33771.jpg',
        stock: 15,
        description: 'Descripción mate Stanley',
    }
    ,
    {
        id: '3',
        name: 'Yerba Sara 1Kg',
        price: 200,
        category: 'Yerba',
        img: 'https://devotouy.vtexassets.com/arquivos/ids/1060633/Yerba-SARA-Suave-1-kg-1.jpg?v=638349781777130000',
        stock: 200,
        description: 'Descripción Yerba Sara',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, )
    }
    )
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 100)
    });
}

export const getProductById = (itemId) => { 
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.id === itemId))
        },100
)
    }
    
    )
}


export default products;
import img1 from "../src/img/semipermanente1.jpeg"
import img2 from "../src/img/semipermanente2.jpeg"
import img3 from "../src/img/semipermanente3.jpeg"
import img4 from "../src/img/tradicional1.jpg"
import img5 from "../src/img/tradicional2.jpg"
import img6 from "../src/img/press-on.jpg"
import img7 from "../src/img/brillos1.jpg"
import img8 from "../src/img/brillos2.jpg"
import img9 from "../src/img/cabina1.jpg"
import img10 from "../src/img/cabina2.jpg"

const products = [
    {
        id: '1',
        name: 'Esmalte Semipermanente Meliné',
        price: 4900,
        category: 'Semipermanente',
        stock: 3,
        description:'Descripcion de Esmalte',
        img: img1
    },
    {
        id: '2',
        name: "Esmalte Semipermanente Kiki",
        price: 2400,
        category: 'Semipermanente',
        stock: 1,
        description:'Descripcion Esmalte Kiki',
        img: img2
    },
    {
        id: '3',
        name: "Esmalte Semipermanente Juka",
        price: 3100,
        category: 'Semipermanente',
        stock: 6,
        description:'Descripcion esmalte Juka',
        img: img3
    },
    {
        id: '4',
        name: 'Esmalte Tradicional OPI',
        price: 4800,
        category: 'Tradicional',
        stock: 5,
        description:'Descripcion Esmalte OPI',
        img: img4
    },
    {
        id: '5',
        name: "Esmalte Tradicional Essie",
        price: 11700,
        category: 'Tradicional',
        stock: 5,
        description: 'Descripcion Essie',
        img: img5
    },
    {
        id: '6',
        name: 'Press On punta Coffin x600u',
        price: 2200,
        category: 'Accesorios',
        stock: 6,
        description: 'Descripcion Press on',
        img: img6
    },
    {
        id: '7',
        name: 'Polvo Aurora',
        price: 1500, 
        category: 'Accesorios',
        stock: 4,
        description: 'Descripcion Polvo Aurora',
        img: img7
    },
    {
        id: '8',
        name: 'Polvo Holográfico',
        price: 1430,
        category: 'Accesorios',
        stock: 4,
        description: 'Descripcion Polvo Holografico',
        img: img8
    },
    {
        id: '9',
        name: 'Cabina Gadnic Led UV',
        price: 33999,
        category: 'Cabina',
        stock: 3,
        description: 'Descripcion Cabina Gadnic',
        img: img9
    },
    {
        id: '10',
        name: 'Cabina Sun Led UV',
        price: 13999,
        category: 'Cabina',
        stock: 7,
        description: 'Descripcion Cabina Led UV',
        img: img10
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {

        setTimeout(() => {
            resolve(products.filter(prod=> prod.category === categoryId))
        }, 500);
    })
}
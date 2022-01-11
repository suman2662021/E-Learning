const initialState = {
    products: [
        {
            id: 1,
            productName: 'c++ course',
            description: "This is Begginers friendly couese. After this course you are able to make projets using this language.",
            actualPrice: "Rs.2000",
            listingPrice: "Free course", 
            category: "Courses",
            compatibleWith: "Beginers",
            imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--rPvSn38T--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/h2917prj7ldo0ow5x5ih.png',
            stock: 10,
        }, {
            id: 2,
            productName: 'Java Course',
            description: "This is Begginers friendly couese. After this course you are able to make projets using this language.",
            actualPrice: "Rs.1000",
            listingPrice: "Free course",  
            category: "Courses",
            compatibleWith: "Beginers",
            stock: 119,
            imageUrl: 'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/12626/java-training-course.png',
        }
        , {
            id: 3,
            productName: 'Python Course',
            description: "This is Begginers friendly couese. After this course you are able to make projets using this language.",
            actualPrice: "Rs.3000",
            listingPrice: "Free course", 
            category: "Courses",
            compatibleWith: "Beginers",
            color: 'Blue',
            stock: 8,
            imageUrl: 'https://image.shutterstock.com/z/stock-photo-python-programming-language-programing-workflow-abstract-algorithm-concept-on-virtual-screen-1846209262.jpg'
        }
        , {
            id: 4,
            productName: 'Web Development',
            description: "This is Begginers friendly couese. After this course you are able to make projets using this language.",
            stock: 29,
            actualPrice: "Rs.5000",
            listingPrice: "Free Course", 
            category: "Courses",
            compatibleWith: "Beginers",
            color: 'yellow',
            imageUrl: 'https://image.shutterstock.com/z/stock-photo-software-development-programming-code-on-computer-screen-new-technology-revolution-mobile-app-1043040466.jpg'
        }
        , {
            id: 5,
            productName: 'Learn PHP',
            description: "This is Begginers friendly couese. After this course you are able to make projets using this language.",
            stock: 5,
            actualPrice: "Rs.2000",
            listingPrice: "Free course", 
            category: "Courses",
            compatibleWith: "Beginers",
            color: 'Orange',
            imageUrl: 'https://image.shutterstock.com/z/stock-photo-php-inscription-against-laptop-and-code-background-learn-php-programming-language-computer-1852808164.jpg'
        }
    ]
}

const productsReducer = (state = initialState, action) =>{
    const { type, payload } = action 

    switch (type) {
        case 'DELETE_PRODUCT':
            const { productId } = payload
            return {
                products: state.products.filter(prod => prod.id !== productId)
            }
        case 'ADD_PRODUCT':
    const { product } = payload
            return {
            products: [...state.products, product]
                }    
        default:
            return state
    }
}

export default productsReducer;
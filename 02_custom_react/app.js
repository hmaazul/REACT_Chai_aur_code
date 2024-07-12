
//  applying our render method as like react render
function customRender(reactElement, container){
    /*
    //creating element and inserting the properties into it
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children

    element.setAttribute('href', reactElement.props.href )
    element.setAttribute('target',reactElement.props.target)
    
    // injecting the element in main container
    container.appendChild(element)
    */

    // applying best practice
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    console.log(domElement);
    container.appendChild(domElement)
}

// creating the react element as react convert the html element in js like an object
const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
}

// getting the root element from html
const container = document.getElementById('root')

// applying render with custom methods
customRender(reactElement, container)

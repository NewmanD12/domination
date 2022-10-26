// ### Part One - Querying DOM Elements



// 1. Write a function that puts a line through the text of the first `<li>` in the unordered "Arguments" list (`<ul`). Since this function always does the same thing, it requires no parameters!

function strikeThrough(){
    
    let arguementsUnorderedList = document.querySelector('#arguments')
    
    arguementsUnorderedList['children'][0].style.textDecoration = 'line-through'     
}

// 2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.

strikeThrough()

// 3. Write a function that takes in a string representing an DOM element's `id` and a string representing a url. The function should set the image with that `id` to have that url as its image source.

function setImage(element_id, img_url){
    let image_to_change = document.querySelector('#' + element_id)
    image_to_change.src = img_url
}

//

let image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoT237jYl0RBcZuH4BThBhy6JSwbOnbwQAjw-GCSS7wJtH7zbWh8jgGG3tfeE4zEekws&usqp=CAU'

let image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7EVls2PRCMgGdoKko1GLTbHDEkVVpIHnoBhumeajjnhq6wspUivWNr0Fl7WNiazR1LM&usqp=CAU'

let image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ePHDGlf0tJ8wO98PqxpD2vORLxsMflqSbcqa1evrWRagmnt1JtSGHXOOZaCrS7zvkJY&usqp=CAU'

// 4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!

setImage('image-1', image1)
setImage('image-2', image2)
setImage('image-3', image3)

// 5. This next function also doesn't require any parameters: write a function that always removes the first `<li>` from the Arguments `<ul>`

function removeFirstFromArgumentsUnorderedList(){
    let unorderedList = document.querySelector('ul')
    unorderedList['children'][0].remove()
}

// 6. Now use it to remove the first two items from that list. You'll need to call it twice!

removeFirstFromArgumentsUnorderedList()
removeFirstFromArgumentsUnorderedList()

// 7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.

function changeFontSize(element_id, font_size){
    let element = document.querySelector('#' + element_id)
    element.style.fontSize = font_size + 'px'
}

// 8. Try using it to change the size of any text on the page.

changeFontSize('heading', '55')

// // Part 2: DOM Elements as Function Parameters

// // 1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.

function appendToArgumentsUnorderedList(item){
    let itemToAdd = document.createElement('li')
    let unorderedList = document.querySelector('ul')
    if(typeof item === 'string'){
        itemToAdd.innerText = item
        unorderedList.appendChild(itemToAdd)
    } 
    else if(typeof item === 'object'){
        unorderedList.appendChild(item)
    }
}

appendToArgumentsUnorderedList('Item from part 2')

// // 2. Let's use it! Create an image element in Javascript and pass it into your function.

let image4Url = 'https://cdn.vox-cdn.com/thumbor/3xzb215QY7pf0otplWspCI-TMaA=/0x0:1440x1440/1200x900/filters:focal(694x648:924x878)/cdn.vox-cdn.com/uploads/chorus_image/image/60186081/170693895_4333602896667873_273842208193759023_n.7.jpg'


let imageToPass = document.createElement('img')
imageToPass.src = image4Url
appendToArgumentsUnorderedList(imageToPass)

// // 3. Write a function that takes in an image element and modifies its height to be 30 pixels.

function imgTo30px(img_id){
    let imageToShrink = document.querySelector('#' + img_id)
    imageToShrink.style.height = '30px'
}

// // 4. Let's use it. Query an image element and then pass it into the function.

imgTo30px('image-2')

// //5. Write a function that takes in an element and gives it the class `invisible`.

let header = document.querySelector('h1')
function giveInvisibleClass(element){
    element.className = 'invisible' 
}

// //6. Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)

giveInvisibleClass(header)

// // ### Part Three - Creating DOM Elements

// // 1. Write a function that takes in text and returns a new `<li>` with the given text parameter as its `innerText`.

function createLi(string){
    let item = document.createElement('li')
    item.innerText = string
    return item
}

// // 2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).

let anotherItem = createLi('This is an item added from part 3')

appendToArgumentsUnorderedList(anotherItem)

// // 3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.

function createHeader(size, text){
    let header = document.createElement(`h${size}`)
    header.innerText = text
    return header
}

// // 4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).

let part3Header = createHeader('3', 'This is the header from part 3')

appendToArgumentsUnorderedList(part3Header)

//
const dataProm = new Promise((resolves, rejected) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.npoint.io/0fd0e928045a35c83e0c', true)
    xhr.onload = () => {
        if (xhr.status = 200) {
            resolves(JSON.parse(xhr.response))
        } else {
            rejected("Internal Server Error!")
        }
    }
    xhr.onerror = () => { // kesalahan kita sendiri / client
        rejected("Internet tidak ada!")
    }
    xhr.send()
})
//
function html(item) {
    return `<div class="testimonial">
    <img src="${item.Image}" class="profile-testimonial" />
    <p class="quote">"${item.Content}"</p>
    <p class="author">- ${item.Author}</p>
    <p class="author">${item.Rating} <i class="fa-solid fa-star"></i></p>
</div>`
}

// 
async function testimonialData() {
    let testimonialHTML = ``
    const Testimonial = await dataProm
    Testimonial.forEach((item) => {
        testimonialHTML += html(item)
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML
}

// 
testimonialData()

// 
async function filterTestimonials(Rating) {
    let testimonialHTML = ``
    const Testimonial = await dataProm
    const testimonialFiltered = Testimonial.filter((item) => {
        return item.Rating === Rating
    })

    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h3>Data Not Found</h3>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += html(item)
        })
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML
}
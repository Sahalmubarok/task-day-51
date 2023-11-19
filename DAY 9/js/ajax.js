
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
function testimonialData() {
    let testimonialHTML = ``
    Testimonial.forEach((item) => {
        testimonialHTML += html(item)
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML
}

// 
testimonialData()

// 
function filterTestimonials(Rating) {
    let testimonialHTML = ``
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
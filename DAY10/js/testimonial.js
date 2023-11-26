//
const Testimonial = [
    {
        Author: "Sahal",
        Content: "Kokoh Spritual, Mapan Intelektual",
        Image: "https://images.pexels.com/photos/17681915/pexels-photo-17681915/free-photo-of-pemandangan-pegunungan-alam-air.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        Rating: 5
    },
    {
        Author: "Dawn Klark",
        Content: "Tidak ada kata terlambat untuk mulai menciptakan kehidupan yg kamu inginkan",
        Image: "https://images.pexels.com/photos/5215886/pexels-photo-5215886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        Rating: 3
    },

    {
        Author: "Albert Einstein",
        Content: "Jauhi orang-orang negatif, mereka punya masalah untuk setiap solusi ",
        Image: "https://images.pexels.com/photos/1453076/pexels-photo-1453076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        Rating: 5
    }
]

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
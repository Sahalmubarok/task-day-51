class Testimonial {
    constructor(name, review, image) {
        this.name = name
        this.review = review
        this.image = image
    }

    html() {
        return `
            <div class="testimonial">
                <img src="${this.image}" class="profile-testimonial" />
                <p class="quote">"${this.review}"</p>
                <p class="author">- ${this.name}</p>
            </div>
        `
    }
}

const testimonial1 = new Testimonial("Sahal", "Kokoh Spritual, Mapan Intelektual", "https://images.pexels.com/photos/17681915/pexels-photo-17681915/free-photo-of-pemandangan-pegunungan-alam-air.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
const testimonial2 = new Testimonial("Albert Einstein", "Jauhi orang-orang negatif, mereka punya masalah untuk setiap solusi ", "https://images.pexels.com/photos/5215886/pexels-photo-5215886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
const testimonial3 = new Testimonial("Dawn Klark", "Tidak ada kata terlambat untuk mulai menciptakan kehidupan yg kamu inginkan", "https://images.pexels.com/photos/1453076/pexels-photo-1453076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")

const testimonials = [testimonial1, testimonial2, testimonial3]

let testimonialHTML = ``
for (let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML
function print(cb, name) {
    // proses apa dulu
    
    cb(name)
}

function greeting(name) {
    console.log("Halo perkenalkan nama saya :",name)
}

function greetingV2(name) {
    console.log("Let introduce myself, my name is :",name)
}
    
print(greeting, "Sahal")
print(greetingV2, "Alex")
print(greeting, "Dery")

// greeting("Sahal")
// greetingV2("Dery")
// greeting("Alex")

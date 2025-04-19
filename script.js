// დავალება 1: მოცემული გვაქვს მთელი რიცხვები int1 და int2. მათი განაყოფი ჩაწერეთ result ცვლადში, Math.toFixed
// მეთოდით დაამრგვალეთ მეათასედი სიზუსთით და გამოიტანეთ ეკრანზე.
// let int1 = 70, int2 = 27;


function gayofa(int1, int2){
    document.write((int1/int2).toFixed(3) + "<br>")
}
gayofa(70, 27)

// შევქმნათ ფუნქცია fahrenheitToCelsius. მასზე გადაცემული რიცხვითი პარამეტრი მიუთითებს ფარენგეიტში
// გამოსახულ ტემპერატურას. ფუნქციამ კონვერტაცია უნდა გაუკეთოს ფარენჰეითს ცელსიუსში და დააბრუნოს ის.
function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(1);
    return celsius;
}

document.write(fahrenheitToCelsius(80) + "<br>")

// დავალება 3: შექმენით ფუნქცია include, რომელიც არგუმენტად მიიღებს 2 სტრინგს, თუ პირველი სტრინგი შეიცავს მეორე
// სტრინგს, მაშინ ცვლადს result-ს მიანიჭებს true-ს თუ არა false-ს. result-ის მნიშვნელობას alert-ით გამოიტანს
// ეკრანზე და ასევე დააბრუნებს მას. 
function include(str1, str2) {
    let result = str1.includes(str2)
    window.alert(result);
    document.write(result + "<br>")
    return result;
}
include("გამარჯობა", "გამა");


// დავალება4 :შექმენით myPow ფუნქცია, რომელსაც გადაეცემა ორი რიცხვითი პარამეტრი და რომელსაც იგივე დანიშნულება
// ექნება რაც Math.pow() ფუნქციას აქვს, ანუ პირველ პარამეტრად გადაცემულ მნიშვნელობას აიყვანს მეორე
// პარამეტრად გადაცემული რიცხვის ხარისხში და მიღებულ შედეგ დააბრუნებს.

function myPow (num1, num2){
    let result = Math.pow(num1, num2);
    document.write(result + "<br>")
    return result;

}
myPow(5, 2);


// დავალება 5: გადააკეთეთ წარმოდგენილი multiplication ფუნქცია ისრულ ფუნქციად. შეინარჩუნეთ მისი სახელიც დალოგიკაც.
// function multiplication (x, y) {
// return x * y; }
function multiplication (x, y) {
    return (x * y); 

}

document.write(multiplication(6, 5) + "<br>");
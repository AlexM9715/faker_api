//import all dependencies
const express = require("express")
const app = express()
const {faker} = require("@faker-js/faker")

//config
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//construct class 
class User{
    constructor(){
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.phoneNumber()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.datatype.string(10)
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.string(10)
        this.name = faker.company.companyName()
        this.address = {
            street:faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(),
            country: faker.address.country()}
    }
}



//get (read)
app.get("/api/users/new", (req, res) => {
    const newUser = new User()
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company()
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    const newUser = new User()
    const newCompany = new Company()
    res.json({newUser, newCompany})
})

//post (create)

//put (update)

//delete (delete)

app.listen(8000, ()=>console.log("Listening to port: 8000"))
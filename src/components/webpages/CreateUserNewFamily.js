

export default function FormPropsTextFields(){
    const [email, setEmail] = React.useState("")
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [momFirstName, setMomFirstName] = React.useState("");
    const [momLastName, setMomLastName] = React.useState("");
    const [dadLastName, setDadLastName] = React.useState("");
    const [dadFirstName, setDadFirstName] = React.useState("");
    const [familyId, setFamilyId] = React.useState("");
    const [familyName, setFamilyName] = React.useState("");

    const handleClick =(e)=> {
        e.preventDefault()

        const familyMember = {email,firstName,lastName, username, password, momFirstName, momLastName, dadFirstName, dadLastName, familyId, familyName}

        fetch("http://localhost:8080/family/add/addfamily")
    }
}
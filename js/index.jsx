// class MyFristInput extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log(props)
//         this.state = {
//             name: "Juan",
//             lastName: "Ortiz"
//         }
//     }

const { useState } = require("react")

//     getFullName = () => {
//         const { name, lastName } = this.state
//         return name + ' ' + lastName
//     }

//     render() {
//         console.log(this.state)
//         return (
//             <div>
//                 Hola ${this.getFullName}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <MyFristInput />,
//     document.getElementById('root')
// ) 

function MyFristInput() {
    const [name] = useState()
    const [lastName] = useState("Montiel")
    const { name, lastName } = this.state
}
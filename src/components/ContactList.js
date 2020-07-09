// components/ListDemo.js
import React,{Component} from 'react';
import Contacts from "../contacts.json";
import Card from "../components/ContactCard";



// array of list item HTML elements that needs to be displayed

class ContactList extends Component{

constructor(){
    super();
    this.state={   
        contact:Contacts.filter((contact,index)=>{
        return index <5;
    })
}
}

addRandom=()=>{
    const contactCopy=Contacts.filter((contact,index)=>{
        return index >= 5;
    });
    const newContact= this.state.contact;
    var item = contactCopy[Math.floor(Math.random() * contactCopy.length)];
    newContact.push(item);
    this.setState({
        contact:newContact
    })

}

sortName=()=>{
    const contactCopy=[...this.state.contact];
    contactCopy.sort((a,b)=>{
        if(a.name > b.name){
            return 1;
        }
        if(a.name <b.name){
            return -1;
        }
        return 0;
    });

    this.setState({
        contact:contactCopy
    })
}

sortPopularity=()=>{
    const contactCopy=[...this.state.contact];
    contactCopy.sort((a,b)=>{
        if(a.popularity > b.popularity){
            return 1;
        }
        if(a.popularity <b.popularity){
            return -1;
        }
        return 0;
    });
console.log("HI");
    this.setState({
        contact:contactCopy
    })
}

deleteContact = (movieIndex) => {
    const contactsCopy = this.state.contact;
    contactsCopy.splice(movieIndex, 1);
    this.setState({
        movies: contactsCopy
    })
  }


    render(){



    return (
        <div>
        <button onClick={this.addRandom}>add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table >
            <tr>
    <th>
        <h3>Picture</h3>
    </th>
    <th>
        <h3>Name</h3>
    </th>
    <th>
        <h3>Popularity</h3>
    </th>
  </tr>
      
        { this.state.contact.map((oneContact,index) => {
        
          return <Card key={index} imgUrl={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity} clickToDelete={() => this.deleteContact(index)} />;
        
    }
        
          )
        }

      
      </table>
      </div>

    )
  
}
}


export default ContactList;
import React from 'react';
import './App.css';


class App extends React.Component {

  SubmitForm(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", this.name.value);
    urlencoded.append("phone", this.phone.value);
    urlencoded.append("email", this.email.value);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    // * Always make sure your php file is located inside an apache server
    // ? You can decide to put the whole project folder inside an apache server.

    fetch("http://localhost/my-app/api/processform.php", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  render(){
    return (
      <div className="App">
        <form onSubmit={(e) => this.SubmitForm(e) } >
          <h2>Message US</h2>
          <input type="text" placeholder="Name" ref={(input) => {this.name = input}} /><br />
          <input type="text" placeholder="Phone" ref={(input) => {this.phone = input}} /><br />
          <input type="email" placeholder="Email" ref={(input) => {this.email = input}} /><br />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import firebase from 'firebase';
import {  Glyphicon } from 'react-bootstrap';
import {
    Link,
    Message,
    MessagebarAttachment,
    MessagebarAttachments,
    MessagesTitle,
    MessagebarSheet,
    MessagebarSheetImage,
    Messagebar,
    Messages,
    Page
} from 'framework7-react';

import './message.css';



class MessagebarberShop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            attachments: [],
            sheetVisible: false,
            typingMessage: null,
            messagesData:[],
            images: [
                '', ''
            ],
            people: [
                {
                    name: 'Kate Johnson',
                    avatar: '',
                },
                {
                    name: 'Blue Ninja',
                    avatar: '',
                },
            ],
            answers: [
                'Yes!',
                'No',
                'Hm...',
                'I am not sure',
                'And what about you?',
                'May be ;)',
                'Lorem ipsum dolor sit amet, consectetur',
                'What?',
                'Are you sure?',
                'Of course',
                'Need to think about it',
                'Amazing!!!',
            ],
            responseInProgress: false,
        }
    }
    componentWillMount(){
        const ref = firebase.database().ref();
        var Qm = ref.child('messages');
        
        Qm.on('value', snapchot => {
            
            var d = snapchot.val()
            var arr = [];
        for(var key in d){
            arr.push(d[key])
        }
        var data = JSON.stringify(arr);
            localStorage.setItem('messages', data);
            this.setState({
                messagesData: JSON.parse(localStorage.getItem('messages')),
                loading: false
            })

           
            console.log(firebase.auth().currentUser.uid);

            
        })

        var appStatus = false;
            var conRef = firebase.database().ref('.info/connected');
            conRef.on('value', function(snap){
                if(snap.val() === true){
                    appStatus = true
                }
        });

        if(!appStatus){
            this.setState({
                messagesData: JSON.parse(localStorage.getItem('messages')),
                loading: false
            })
        }
    }

    render() {
        return (
            <Page>

                <Messagebar colorTheme='black'
                    placeholder={this.placeholder}
                    ref={(el) => { this.messagebarComponent = el }}
                    attachmentsVisible={this.attachmentsVisible}
                    sheetVisible={this.state.sheetVisible}
                >
                    <Link
                        slot="inner-start"
                        onClick={() => { this.setState({ sheetVisible: !this.state.sheetVisible }) }}
                    ><Glyphicon  glyph="glyphicon glyphicon-camera" /></Link>
                    <Link
                        slot="inner-end"
                        onClick={this.sendMessage.bind(this)}
                    ><Glyphicon  glyph="glyphicon glyphicon-menu-right" /></Link>
                    <MessagebarAttachments>
                        {this.state.attachments.map((image, index) => (
                            <MessagebarAttachment
                                key={index}
                                image={image}
                                onAttachmentDelete={() => this.deleteAttachment(image)}
                            ></MessagebarAttachment>
                        ))}
                    </MessagebarAttachments>
                    <MessagebarSheet>
                        {this.state.images.map((image, index) => (
                            <MessagebarSheetImage
                                key={index}
                                image={image}
                                checked={this.state.attachments.indexOf(image) >= 0}
                                onChange={this.handleAttachment.bind(this)}
                            ></MessagebarSheetImage>
                        ))}
                    </MessagebarSheet>
                </Messagebar>

                <Messages ref={(el) => { this.messagesComponent = el }}>

                    <MessagesTitle textColor='black'><b>Sunday, Feb 9,</b> 12:58</MessagesTitle>

                    {this.state.messagesData.map((message, index) => (
                        <Message
                            key={index}
                            type={this.TypeBericht(message.type, message.userid)}
                            image={message.image}
                            name={message.name}
                            avatar={message.avatar}
                            first={this.isFirstMessage(message, index)}
                            last={this.isLastMessage(message, index)}
                            tail={this.isTailMessage(message, index)}
                        >
                            {message.text && (
                                <span slot="text" dangerouslySetInnerHTML={{ __html: message.text }} />
                            )}
                        </Message>
                    ))}
                    {this.state.typingMessage && (
                        <Message
                            type="received"
                            typing={true}
                            first={true}
                            last={true}
                            tail={true}
                            header={`${this.state.typingMessage.name} is typing`}
                            avatar={this.state.typingMessage.avatar}
                        ></Message>
                    )}
                </Messages>
            </Page>
        )
    }

    get attachmentsVisible() {
        const self = this;
        return self.state.attachments.length > 0;
    }
    get placeholder() {
        const self = this;
        return self.state.attachments.length > 0 ? 'Add comment or Send' : 'Message';
    }
    componentDidMount() {
        const self = this;
        self.$f7ready(() => {
            self.messagebar = self.messagebarComponent.f7Messagebar;
            self.messages = self.messagesComponent.f7Messages;
        });
    }
    isFirstMessage(message, index) {
        const self = this;
        const previousMessage = self.state.messagesData[index - 1];
        if (message.isTitle) return false;
        if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name) return true;
        return false;
    }
    isLastMessage(message, index) {
        const self = this;
        const nextMessage = self.state.messagesData[index + 1];
        if (message.isTitle) return false;
        if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
        return false;
    }
    isTailMessage(message, index) {
        const self = this;
        const nextMessage = self.state.messagesData[index + 1];
        if (message.isTitle) return false;
        if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name) return true;
        return false;
    }
    deleteAttachment(image) {
        const self = this;
        const attachments = self.state.attachments;
        const index = attachments.indexOf(image);
        attachments.splice(index, 1);
        self.setState({ attachments });
    }
    handleAttachment(e) {
        const self = this;
        const attachments = self.state.attachments;
        const index = self.$$(e.target).parents('label.checkbox').index();
        const image = self.state.images[index];
        if (e.target.checked) {
            // Add to attachments
            attachments.unshift(image);
        } else {
            // Remove from attachments
            attachments.splice(attachments.indexOf(image), 1);
        }
        self.setState({ attachments });
    }
    sendMessagee() {
        const self = this;
        const text = self.messagebar.getValue().replace(/\n/g, '<br>').trim();
        const messagesToSend = [];
        self.state.attachments.forEach((attachment) => {
            messagesToSend.push({
                image: attachment,
            });
        });
        if (text.trim().length) {
            messagesToSend.push({
                text,
            });
        }
        if (messagesToSend.length === 0) {
            return;
        }

        self.setState({
            // Reset attachments
            attachments: [],
            // Hide sheet
            sheetVisible: false,
            // Send message
            messagesData: [...self.state.messagesData, ...messagesToSend],
        });
        self.messagebar.clear();

        // Focus area
        if (text.length) self.messagebar.focus();

        // Mock response
        if (self.state.responseInProgress) return;
        self.setState({
            responseInProgress: true,
        })
        setTimeout(() => {
            const answer = self.state.answers[Math.floor(Math.random() * self.state.answers.length)];
            const person = self.state.people[Math.floor(Math.random() * self.state.people.length)];
            self.setState({
                typingMessage: {
                    name: person.name,
                    avatar: person.avatar,
                },
            });
            setTimeout(() => {
                self.setState({
                    messagesData: [...self.state.messagesData, {
                        text: answer,
                        type: 'received',
                        name: person.name,
                        avatar: person.avatar,
                    }],
                    typingMessage: null,
                    responseInProgress: false,
                });
            }, 4000);
        }, 1000);
    }
    sendMessage() {
        const self = this;
        //const text = self.state.msgText.replace(/\n/g, '<br>').trim();      
        const text = self.messagebar.getValue().replace(/\n/g, '<br>').trim();
        const messagesToSend = [];
        /*self.state.attachments.forEach((attachment) => {
          messagesToSend.push({
            image: attachment,
          });
        });*/
  
          ///console.log(this.state.naam)
          //firebase.database().ref().child('messages').push
          //messagesToSend.push
          var user = firebase.auth().currentUser;
          if(user !== null){
  
            //Controleer om te zien of jij de enige die momenteel aan het schrijven bent
            //Indien ja deze data wordt onmiddelijk afgewist.
            //this.DeleteIsTyping();
  
            // Save image OP de FIREBASE
        self.state.attachments.forEach((attachment) => {
          var timeStampImage = Math.floor(Date.now());
          //console.log("The value voor image "+ localStorage.getItem('firebaseChildren'));
          firebase.database().ref().child('messages').child(timeStampImage).set({
            image: attachment,
              type: 'sent',
              name: firebase.auth().currentUser.displayName,
              avatar: firebase.auth().currentUser.photoURL,
              userid: user.uid
          });
          
          //console.log(attachment); 
        });
        
        
        if (text.trim().length) {
          var timeStampMessage = Math.floor(Date.now());
          firebase.database().ref().child('messages').child(timeStampMessage).set({
            text,
              type: 'sent',
              name: firebase.auth().currentUser.displayName,
              avatar: firebase.auth().currentUser.photoURL,
              userid: user.uid
          });
  
        }
        //Clear de message bar
         self.messagebar.clear();
    
        // Focus area
        if (text.length) self.messagebar.focus();
    
          
        }
  
        self.setState({
          // Reset attachments
          attachments: [],
          // Hide sheet
          sheetVisible: false,
          msgText:""
        });
  
        if (messagesToSend.length === 0) {
          return;
        }
              
        // Mock response
        if (self.state.responseInProgress) return;
        self.setState({
          responseInProgress: true,
        })
       
      }
      
      TypeBericht(type, userid){
        var myType = 'received';
        var user = firebase.auth().currentUser;
  
        if(user !== null){
          if(type === "sent" && userid === user.uid){
            //console.log(type);
            return type;
          }else{
            return myType;
          }  
        }else{
          return myType;        
        }
            
      }
}

export default MessagebarberShop
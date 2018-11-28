import React, { Component } from 'react';
import { Icon } from 'antd';
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
            messagesData: [
                {
                    type: 'sent',
                    text: 'Hi, Kate',
                },
                {
                    type: 'sent',
                    text: 'How are you?',
                },
                {
                    name: 'Kate',
                    type: 'received',
                    text: 'Hi, I am good!',
                    avatar: 'http://lorempixel.com/100/100/people/9',
                },
                {
                    name: 'Blue Ninja',
                    type: 'received',
                    text: 'Hi there, I am also fine, thanks! And how are you?',
                    avatar: 'http://lorempixel.com/100/100/people/7',
                },
                {
                    type: 'sent',
                    text: 'Hey, Blue Ninja! Glad to see you ;)',
                },
                {
                    type: 'sent',
                    text: 'Hey, look, cutest kitten ever!',
                },
                {
                    type: 'sent',
                    image: 'http://lorempixel.com/200/260/cats/4/',

                },
                {
                    name: 'Kate',
                    type: 'received',
                    text: 'Nice!',
                    avatar: 'http://lorempixel.com/100/100/people/9',
                },
                {
                    name: 'Kate',
                    type: 'received',
                    text: 'Like it very much!',
                    avatar: 'http://lorempixel.com/100/100/people/9',
                },
                {
                    name: 'Blue Ninja',
                    type: 'received',
                    text: 'Awesome!',
                    avatar: 'http://lorempixel.com/100/100/people/7',
                },
            ],
            images: [
                'http://lorempixel.com/300/300/cats/1/',
                'http://lorempixel.com/200/300/cats/2/',
                'http://lorempixel.com/400/300/cats/3/',
                'http://lorempixel.com/300/150/cats/4/',
                'http://lorempixel.com/150/300/cats/5/',
                'http://lorempixel.com/300/300/cats/6/',
                'http://lorempixel.com/300/300/cats/7/',
                'http://lorempixel.com/200/300/cats/8/',
                'http://lorempixel.com/400/300/cats/9/',
                'http://lorempixel.com/300/150/cats/10/',
            ],
            people: [
                {
                    name: 'Kate Johnson',
                    avatar: 'http://lorempixel.com/100/100/people/9',
                },
                {
                    name: 'Blue Ninja',
                    avatar: 'http://lorempixel.com/100/100/people/7',
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
                    ><Icon type="camera" theme="filled" /></Link>
                    <Link
                        slot="inner-end"
                        onClick={this.sendMessage.bind(this)}
                    ><Icon type="caret-right" /></Link>
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
                            type={message.type}
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


                    {/* <Blur className='headercuts' img={photo} blurRadius={8} /> */}
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
    sendMessage() {
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
}

export default MessagebarberShop
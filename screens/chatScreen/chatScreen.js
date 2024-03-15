import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  };
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            type="font-awesome"
            name="paperclip"
            style={{
              marginBottom: 10,
              marginRight: 10,
              transform: [{rotateY: '180deg'}],
            }}
            size={25}
            color='blue'
            tvParallaxProperties={undefined}
          />
          <Icon
            type="font-awesome"
            name="send"
            style={{marginBottom: 10, marginRight: 10}}
            size={25}
            color='orange'
            tvParallaxProperties={undefined}
          />
        </view>
      </Send>
    );
  };
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };
  const scrollToBottomComponent = () => {
    return <FontAwesome6 name="angle-double-down" size={22} color="#333" />;
  };
  return (
    <View style={{flex:1}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 2,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </View>
  );
};

export default Chat;
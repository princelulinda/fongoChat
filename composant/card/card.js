import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { auth, db, database } from '../../firebaseServises/firebaseConfing/firebase.config';
import { ref, onValue } from "firebase/database";


const PublicationCard = ({ user, content, image }) => {
  const [articles, setArticles] = useState([]); // State for an array of articles
  const [likes, setLikes] = useState(0);
  const [username, setUsername] = useState();


  useEffect(() => {
    const ref = collection(db, "Publication");
    const q = query(ref, orderBy("datePublication"));

    // Unsubscribe from the listener when the component unmounts
    const unsub = onSnapshot(q, (querySnapshort) => {
      const articlesData = querySnapshort.docs.map((doc) => ({
        id: doc.id, // Add document ID for keyExtractor
        datePublication: doc.data().datePublication,
        user: doc.data().user,
        image: doc.data().image,
        text: doc.data().text,
      }));
      setArticles(articlesData);
    });

    return unsub;
  }, []);
  const handleLike = () => {
    setLikes(likes + 1);
  };
articles.map((item)=>{
 console.log(item);
})
  const renderArticle = ({ item }) => (
    // Access article properties directly using 'item'
    <View style={[{display:item.user? "block" : 'none'},styles.container]}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={item.user.photo}/>
        <Text style={styles.username}>item.user.name</Text>
      </View>
      <Text style={styles.content}>{item.text}</Text>
      <Image style={styles.publicationImage} source={{ uri: item.image }} />
      <View style={styles.actions}>
        {/* Render likes for each article individually */}
        <View>
          <TouchableOpacity onPress={handleLike}>
            <AntDesign name="like2" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.likesCount}>{item.likesCount}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.commentIcon}>
            <FontAwesome6 name="comment-alt" size={24} color="black" />
          </TouchableOpacity>
          <Text>1</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="sharealt" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

if (!articles.length == 0) {
  return(
    <FlatList
    data={articles}
    renderItem={renderArticle}
    keyExtractor={(article) => article.id}
  />

  )
  
} else {
  return(
    <>
    hello</>
  )
}
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    marginTop: 10,
    lineHeight: 20,
  },
  publicationImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  likeIcon: {
    width: 20,
    height: 20,
  },
  likesCount: {
    marginLeft: 5,
  },
  commentIcon: {
    width: 20,
    height: 20,
  },
  shareIcon: {
    width: 20,
    height: 20,
  },
});

export default PublicationCard;

import React from 'react';
import {ScrollView, StyleSheet, Text, View,Image ,ImageBackground,Component,TouchableOpacity,Linking} from 'react-native';

export default function App() {
  
  return (
    
    <ScrollView>
    
      <View style={{marginTop:10, justifyContent:"center", flexDirection:"row",backgroundColor:"#ffd11a"}}>
      <Image style ={{width:60,height:70,borderRadius:100,backgroundColor:"black"}} source={require('./assets/me2.jpg')}></Image>
      <View style={{marginLeft: 0}}>
      <Text style={{fontSize: 25}}>Aakash Ratha</Text>
      <Text style={{fontSize:17}}>Computer Science</Text>
      <Text style={{fontSize:17}}>Vellore Institute of Technology</Text>
      
      <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/aakash-ratha-72b552191/')}>
  <Text style={{color: 'blue',marginLeft:3}}>LinkedIn Profile
  </Text>
</TouchableOpacity>
</View>
      </View>

<View style={styles.container}>
 
 <Image style = {{width: 100, height:100}} source={require('./assets/cmp.gif')}/>

</View>



      <View style={{marginTop:0,backgroundColor:"#00ccff",justifyContent:"center", flexDirection:"row"}}>
        <Text style={{fontSize:20,marginLeft:0}}> Web Developer || Android Club || ML Enthusiast </Text>
     </View>
     <View style={{marginTop:0,backgroundColor:"#33cc33", justifyContent:"center",flexDirection:"row"}}>
       <Text style={{fontSize:20}}>◤BASIC INFO◢</Text>
       </View>
       <View style={{justifyContent:'center'}}>
          <View style={{marginTop:0,backgroundColor:"red", justifyContent:"center",backgroundColor:"#ccff33"}}>
            <Text style={{fontSize:18,marginTop:15}}>⦿B.Tech CSE Student At Vellore Institute Of Tecnology</Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
            <Text style={{fontSize:18,marginTop:0}}>⦿Stream Of Graduation-Computer Science </Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
            <Text style={{fontSize:18,marginTop:0}}>⦿Web Development Intern at AIKYA Youth - United to serve</Text> 
          </View>
          <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
            <Text style={{fontSize:18,marginTop:0}}>⦿Machine learning Enthusiast </Text> 
          </View>
      </View>
<View style={{backgroundColor:"#33cc33",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤SKILLS◢</Text>
</View>
<View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Python</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★c++</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★C</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★SQL</Text>
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★HTML</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★CSS</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★JavaScript</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★React</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★R Studio</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Problem Solving</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>★Data Structures And Algorithms</Text> 
      </View>
      <View style={{backgroundColor:"#33cc33",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤Projects And Contributions◢ </Text>
  </View>
  <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
  <TouchableOpacity onPress={() => Linking.openURL('https://github.com/arpit1991dubey/Android_Dev/tree/master/App')}>
  <Text style={{fontSize:18,color: 'black',backgroundColor:"#ccff33", justifyContent:"center"}}>
  ★ Full-Fledged-Blog-Application  [Click Here to Access Source Code !]
  </Text>
</TouchableOpacity> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
  <TouchableOpacity onPress={() => Linking.openURL('https://github.com/arpit1991dubey/Android_Dev/tree/master/TODO%20App')}>
  <Text style={{fontSize:18,color: 'black',backgroundColor:"#ccff33", justifyContent:"center"}}>
  ★ React Project Sample(The TODO App)  [Click Here to Access Source Code !]
  </Text>
</TouchableOpacity> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
  <TouchableOpacity onPress={() => Linking.openURL('https://www.hackerrank.com/arpitdubey806')}>
  <Text style={{fontSize:18,color: 'black',backgroundColor:"#ccff33", justifyContent:"center"}}>
  ★ Hacker Rank Profile  [Click Here To Open My HackerRank Profile !]
  </Text>
</TouchableOpacity> 
      </View>
      <View style={{backgroundColor:"#33cc33",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤Certifications And Licences◢ </Text>
  </View>
  <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
  <TouchableOpacity onPress={() => Linking.openURL('https://drive.google.com/drive/u/0/folders/16Y8txorqf2HRCP6XB4pN-OxmkkSE3ia-')}>
  <Text style={{fontSize:18,color: 'black',backgroundColor:"#ccff33", justifyContent:"center"}}>
  ✔ Click Here to Access All Certifications And Licences ©Arpit Raj
  </Text>
</TouchableOpacity> 

</View>
     

   
    <View style={{backgroundColor:"#33cc33",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤Prior Education◢ </Text>
  </View>
  <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>⦿Pace Junior Science College, Nerul</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>⦿Ryan International School, Sanpada</Text> 
      </View>
 
  <View style={{backgroundColor:"#33cc33",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{fontSize:20}}>◤Co-Extra Curricular And Non Academic Experiences◢ </Text>
  </View>
  <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>⦿Member And Volunteer At Connectiviteee</Text> 
      </View>
      <View style={{marginTop:0,backgroundColor:"#ccff33", justifyContent:"center",backgroundColor:"#ccff33"}}>
         <Text style={{fontSize:18,marginTop:0}}>⦿Member At VITCC Android Club</Text> 
      </View>

  <View>
  <View style={{backgroundColor:"black",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{color:"white"}}>
       Made With ♥ by Aakash Ratha
  </Text>

  </View>
  <View style={{backgroundColor:"black",justifyContent:"center", flexDirection:"row"}}>
      <Text style={{color:"white"}}>
    For Further Queries Contact-aakash.ratha2000@gmail.com
  </Text>
  </View>

      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
});

import {useState} from 'react'; 
import {
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	StyleSheet
} from 'react-native'; 


function App(){
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
      if (task !== '') {
          setTasks([...tasks, task]);
	  setTask('');
      }
  };
	return(
		<View style={styles.container}> 
			<Text style={styles.heading}>Tasks App</Text>
			<View style={styles.inputContainer}> 
				<TextInput 
					style={styles.input}
					placeholder="Enter a task"
					value={task}
					onChangeText={(text) => setTask(text)}
				/> 
				<TouchableOpacity 
					style={styles.addButton}
					onPress={handleAddTask}
				>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity> 
			</View>
			<View style={styles.tasksContainer}> 	
				{tasks.map((task, index) => (
					<Text key={index} style={styles.task}>
						{task}
					</Text>		
				))}
			</View>
		</View>	
	);
}

const styles = StyleSheet.create({
   container: {
      flex: 1, 
      padding: 20,    	
   },
   heading: {
      fontSize: 24, 
      marginBottom: 10, 
   },
   inputContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
   }, 
   input: {
      flex: 1, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      paddingHorizontal: 10, 
   },
   addButton: {
      width: 40, 
      height: 40, 
      backgroundColor: '#4CAF50',
      justifyContent: 'center', 
      alignItems: 'center', 
   },
   addButtonText: {
      fontSize: 24, 
      color: '#fff', 
   },
   tasksContainer: {
      marginTop: 20, 
   },
   task: {
      fontSize: 18, 
      marginBottom: 10, 
   },
});

export default App; 



















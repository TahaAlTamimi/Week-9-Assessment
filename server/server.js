const express=require("express");
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.json('my try')
});

app.get('/task/id/:id', (req, res) => {
    res.json(task);
  });

  app.post('/task', (req, res) => {
    let newTask = req.body;
    task.push(newTask);
    res.json(task);
  });

  app.delete('/task/:id/', (req, res) => {
    let id = parseInt(req.params.id);
    tasks.map(elem => {
      if(elem.id === id) {
          delete elem.id;
      }
      return elem;
    });
    res.json(task);
  }); 




const PORT = 6000;
app.listen(PORT, () => console.log(`Your server is listening to ${PORT}`));

const task = [
    {
        id: 1,
        title: "my task 1",
        isCompleted: false
      },
      {
        id: 2,
        title: "my task 2",
        isCompleted: false
      }
]
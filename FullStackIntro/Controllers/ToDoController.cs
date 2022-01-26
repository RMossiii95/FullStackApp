using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackIntro.Controllers
{
    public class ToDoController : Controller
    {
        [ApiController]
        [Route("[controller]")]
        public class TaskListController : ControllerBase
        {
            ToDoDAL db = new ToDoDAL();
            [HttpGet]
            public List<ToDoList> GetToDos()
            {
                return db.GetToDos();
            }
            [HttpGet]
            public ToDoList GetToDo(int id)
            {
                return db.GetToDo(id);
            }
            [HttpPost]
            public void PostToDo(ToDoList t)
            {
                db.InsertToDo(t);
            }

            [HttpDelete("deletetodo/{id}")]
            public void DeleteToDo(int id)
            {
                db.DeleteToDo(id);
            }
        }
    }
}

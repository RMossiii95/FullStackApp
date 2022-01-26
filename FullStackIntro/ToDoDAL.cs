using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackIntro
{
    public class ToDoDAL
    {
        public List<ToDoList> GetToDos()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from tasks";
                connect.Open();
                List<ToDoList> output = connect.Query<ToDoList>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public ToDoList GetToDo(int id)
        {
            List<ToDoList> output = GetToDos();
            return output.Where(m => m.Id == id).First();
        }

        public void InsertToDo(ToDoList t)
        {
            string sql = $"insert into tasks values({0}, '{t.NameOfTeamMember}', '{t.ShortDescription}', {t.DueDate}, {t.Completed})";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDoList>(sql);
                connect.Close();
            }
        }

        public void DeleteToDo(int id)
        {
            string sql = $"delete from tasks where id = {id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDoList>(sql);
                connect.Close();
            }
        }

        public void UpdateMovie(int id, ToDoList newValues)
        {
            string sql = $"update tasks set nameofteammember='{newValues.NameOfTeamMember}', shortdescription='{newValues.ShortDescription}', duedate={newValues.DueDate}, completed={newValues.Completed} where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<ToDoList>(sql);
                connect.Close();
            }
        }
    }
}

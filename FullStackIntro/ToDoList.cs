using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackIntroshpor
{
    public class ToDoList
    {
        public int Id { get; set; }
        public string NameOfTeamMember { get; set; }
        public string ShortDescription { get; set; }
        public DateTime DueDate { get; set; }
        public bool Completed { get; set; }

        public ToDoList(int id, string tmName, string shortDescription, DateTime dueDate, bool completed)
        {
            Id = id;
            NameOfTeamMember = tmName;
            ShortDescription = shortDescription;
            DueDate = dueDate;
            Completed = completed;
        }
        public ToDoList()
        {

        }
    }
}

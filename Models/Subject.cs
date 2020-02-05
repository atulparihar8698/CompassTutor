using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompassTutor.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class SubjectViewModel
    {
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
        public string SubjectTopicName { get; set; }
    }
}

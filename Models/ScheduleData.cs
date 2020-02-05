using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompassTutor.Models
{
    public class ScheduleData
    {
        public string Day { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
    }


    public class SubjectTypesBySubject
    {
        public string SubjectName { get; set; }
        public string SubjectTypeName { get; set; }
        //public string FirstName { get; set; }
        //public string Email { get; set; }
    }

}

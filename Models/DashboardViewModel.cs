using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompassTutor.Models
{
    public class DashboardViewModel
    {
        public int TotalTutors { get; set; }
        public int ActiveTutors { get; set; }
        public int InActiveTutors { get; set; }
        public int TotalStudents { get; set; }
        public int ActiveStudents { get; set; }
        public int InActiveStudents { get; set; }
        public string Roles { get; set; }
        public int BookedSlots { get; set; }
        public int TotalSchedules { get; set; }
        public int TutorAvailableSlots { get; set; }
        public int StudentSlots { get; set; }
        public int CompletedSchedules { get; set; }
        public int UpcomingSchedules { get; set; }

    }
}

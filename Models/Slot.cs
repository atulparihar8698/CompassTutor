using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public class Slot
    {
        public int Id { get; set; }
        public DateTime ScheduleDateTime { get; set; }
        public string Time{ get; set; }
        public int TutorId { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string SubjectId { get; set; }
        public string SubjectTopicId { get; set; }
        public string Notes { get; set; }
    }
}


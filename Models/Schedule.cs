using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
     public class Schedule
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int SlotId { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public string SubjectId { get; set; }
        public string SubjectTopicId { get; set; }
        public string Message { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}

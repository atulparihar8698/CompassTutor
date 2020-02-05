using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public  class Feedback
    {
        public int Id { get; set; }
        public int TutorId { get; set; }
        public int StudentId { get; set; }
        public int SlotId { get; set; }
        public string Comment { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}


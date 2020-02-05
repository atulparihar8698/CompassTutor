using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public class TutorSubject
    {
        public int Id { get; set; }
        public int TutorId { get; set; }
        public string Subjects { get; set; }
    }
}


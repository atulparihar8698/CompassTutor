﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public  class Country
    {
        public int Id { get; set; }
        public string SortName { get; set; }
        public string Name { get; set; }
        public int PhoneCode { get; set; }
        public List<State> States { get; set; }

    }
}


using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public class State
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CountryId { get; set; }
        public List<City> Cities { get; set; }

    }
}

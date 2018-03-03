
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EatHealthy.Models
{
    public class Marker
    {
        public int ID { get; set; }

        [Required]
        [MaxLength(20)]
        [DisplayName("Name")]
        public string Name { get; set; }

        [Required]
        [MaxLength(40)]
        [DisplayName("Address")]
        public string Address { get; set; }

        
        [Required]
        [DisplayName("Latitude")]
        public float lat { get; set; }

        [Required]
        [DisplayName("Longitude")]
        public float lng { get; set; }

        [Required]
        [MaxLength(20)]
        [DisplayName("Type")]
        public string type { get; set; }

    }
}
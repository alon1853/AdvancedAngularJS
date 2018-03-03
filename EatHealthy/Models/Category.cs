using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EatHealthy.Models
{
    public class Category
    {
        public int ID { get; set; }

        [Required]
        [DisplayName("Category Name")]
        public string Name { get; set; }

        public virtual List<Post> Posts { get; set; }
    }
}
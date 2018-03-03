using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EatHealthy.Models
{
    public class Client
    {
        public int ID { get; set; }
  
        public Gender Gender { get; set; }

        [Required]
        [DisplayName("First Name")]
        public string FirstName { get; set; }

        [Required]
        [DisplayName("Last Name")]
        public string LastName { get; set; }

        [Required]
        [DisplayName("Username")]
        public string ClientName { get; set; }

        [Required]
        public string Password { get; set; }

        [DisplayName("Administrator")]
        public bool IsAdmin { get; set; }

        public virtual List<Comment> Comments { get; set; }

        public virtual List<Post> Posts { get; set; }
    }

    public enum Gender
    {
        Male,
        Female
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EatHealthy.Models
{
    public class UserPostsViewModel
    {
        public int ID { get; set; }

        [DisplayName("User Name")]
        public string UserName { get; set; }


        [DisplayName("First Name")]
        public string FirstName { get; set; }

        [DisplayName("Last Name")]
        public string LastName { get; set; }

        [DisplayName("The Post")]
        public string Title { get; set; }

        [DisplayName("Category ID")]
        public int CategoryID { get; set; }
    }
}
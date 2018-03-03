using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace EatHealthy.Models
{
    public class PostCommentViewModel
    {
        public int ID { get; set; }

        [DisplayName("The Post")]
        public string Title { get; set; }

        [DisplayName("Number Of Comments")]
        public int NumberOfComment { get; set; }
    }
}
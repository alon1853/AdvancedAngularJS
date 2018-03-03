using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EatHealthy.Models
{
    public class Post
    {
        public int ID { get; set; }

        [Required]
        [ForeignKey("Client")]
        [DisplayName("Posting Client")]
        public int ClientID { get; set; }

        [Required]
        [ForeignKey("Category")]
        [DisplayName("Category of the Post")]
        public int CategoryID { get; set; }

        [MaxLength(20)]
        [Required]
        [DisplayName("Title")]
        public string Title { get; set; }

        [MaxLength(5000)]
        [Required]
        public string Content { get; set; }

        [DataType(DataType.Date)]
        [DisplayName("Created at")]
        public DateTime CreationDate { get; set; }

        public virtual Client Client { get; set; }

        public virtual Category Category { get; set; }

        public virtual List<Comment> Comments { get; set; }
    }
}
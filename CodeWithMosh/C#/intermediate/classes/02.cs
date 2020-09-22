using System;

namespace Classes
{
    class Post
    {
        public string Title { get; private set; }
        private readonly string _description;
        public DateTime CreatedAt { get; }
        public int Votes { get; private set; } = 0;

        public Post(string title, string description)
        {
            this.Title = title;
            this._description = description;
            this.CreatedAt = DateTime.Now;
        }

        public void UpVote() => this.Votes++;

        public void DownVote() => this.Votes--;

    }

    class Program
    {
        static void Main()
        {
            var post = new Post("How to solve XYZ?", "Please, don't mark me as duplicate");
            post.UpVote();
            post.UpVote();
            post.DownVote();
            post.DownVote();
            post.DownVote();

            Console.WriteLine($"Post '{post.Title}' was created at {post.CreatedAt} and has {post.Votes * -1} {(post.Votes > 0 ? "upvotes" : "downvotes")}.");
        }
    }
}
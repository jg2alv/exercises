using System;

namespace Polymorphism
{
    class SqlConnection : DbConnection
    {
        public SqlConnection(string connectionString) : base(connectionString)
        { }

        public override void Open() => Console.WriteLine("Opening SqlConnection");

        public override void Close() => Console.WriteLine("Closing SqlConnection");
    }
}
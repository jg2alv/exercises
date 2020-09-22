using System;

namespace Polymorphism
{
    class OracleConnection : DbConnection
    {
        public OracleConnection(string connectionString) : base(connectionString)
        { }

        public override void Open() => Console.WriteLine("Opening OracleConnection");

        public override void Close() => Console.WriteLine("Closing OracleConnection");
    }
}
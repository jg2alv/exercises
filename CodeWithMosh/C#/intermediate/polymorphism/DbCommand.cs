using System;

namespace Polymorphism
{
    class DbCommand
    {
        private DbConnection _conn;
        private string _instruction;

        public DbCommand(DbConnection conn, string instruction)
        {
            if(conn is null || string.IsNullOrWhiteSpace(instruction)) throw new FormatException("Connection argument cannot be null");

            this._conn = conn;
            this._instruction = instruction;
        }

        public void Execute()
        {
            this._conn.Open();
            Console.WriteLine($"Running instruction '{this._instruction}'");
            this._conn.Close();
        }
    }
}
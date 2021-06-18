function clearDb (db) {
  return db.raw(`
    DO
    $func$
    BEGIN
      EXECUTE
      (
        SELECT
          'TRUNCATE TABLE ' || string_agg(oid::regclass::text, ', ') || ' CASCADE'
        FROM
          pg_class
        WHERE
          relkind = 'r'  -- only tables
        AND
          relnamespace = 'public'::regnamespace -- only public namespace
        AND
          relname != 'migrations' -- don't drop the migration history
      );
    END
    $func$;
  `);
}

export default clearDb;


/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type NotePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Note"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    title: string
    content: string | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["note"]>
  composites: {}
}

/**
 * Model Note
 * 
 */
export type Note = runtime.Types.DefaultSelection<NotePayload>
export type TechnicalIncidentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "TechnicalIncident"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    title: string
    description: string
    category: string | null
    subcategory: string | null
    priority: string | null
    status: string
    affected_system: string | null
    root_cause: string | null
    resolution: string | null
    created_at: Date
    updated_at: Date
    location: string | null
    device_id: string | null
    created_by: string | null
    last_updated_by: string | null
  }, ExtArgs["result"]["technicalIncident"]>
  composites: {}
}

/**
 * Model TechnicalIncident
 * 
 */
export type TechnicalIncident = runtime.Types.DefaultSelection<TechnicalIncidentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notes
 * const notes = await prisma.note.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Notes
   * const notes = await prisma.note.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs>;

  /**
   * `prisma.technicalIncident`: Exposes CRUD operations for the **TechnicalIncident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TechnicalIncidents
    * const technicalIncidents = await prisma.technicalIncident.findMany()
    * ```
    */
  get technicalIncident(): Prisma.TechnicalIncidentDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Note: 'Note',
    TechnicalIncident: 'TechnicalIncident'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'note' | 'technicalIncident'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Note: {
        payload: NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload>
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>,
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      TechnicalIncident: {
        payload: TechnicalIncidentPayload<ExtArgs>
        fields: Prisma.TechnicalIncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicalIncidentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicalIncidentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload>
          }
          findFirst: {
            args: Prisma.TechnicalIncidentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicalIncidentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload>
          }
          findMany: {
            args: Prisma.TechnicalIncidentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload>[]
          }
          create: {
            args: Prisma.TechnicalIncidentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload>
          }
          delete: {
            args: Prisma.TechnicalIncidentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload>
          }
          update: {
            args: Prisma.TechnicalIncidentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload>
          }
          deleteMany: {
            args: Prisma.TechnicalIncidentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicalIncidentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TechnicalIncidentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TechnicalIncidentPayload>
          }
          aggregate: {
            args: Prisma.TechnicalIncidentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTechnicalIncident>
          }
          groupBy: {
            args: Prisma.TechnicalIncidentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TechnicalIncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnicalIncidentCountArgs<ExtArgs>,
            result: $Utils.Optional<TechnicalIncidentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Note
   */


  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }


  export type NoteGroupByOutputType = {
    id: number
    title: string
    content: string | null
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  type NoteGetPayload<S extends boolean | null | undefined | NoteArgs> = $Types.GetResult<NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<NoteFindManyArgs, 'select' | 'include'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>
    ): Prisma__NoteClient<$Types.GetResult<NotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Note that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NoteClient<$Types.GetResult<NotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>
    ): Prisma__NoteClient<$Types.GetResult<NotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NoteClient<$Types.GetResult<NotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<NotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
    **/
    create<T extends NoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NoteCreateArgs<ExtArgs>>
    ): Prisma__NoteClient<$Types.GetResult<NotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
    **/
    delete<T extends NoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>
    ): Prisma__NoteClient<$Types.GetResult<NotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>
    ): Prisma__NoteClient<$Types.GetResult<NotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
    **/
    upsert<T extends NoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>
    ): Prisma__NoteClient<$Types.GetResult<NotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Note model
   */ 
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'Int'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }


  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }


  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }


  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }


  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
  }


  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }


  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }


  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
  }


  /**
   * Note without action
   */
  export type NoteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
  }



  /**
   * Model TechnicalIncident
   */


  export type AggregateTechnicalIncident = {
    _count: TechnicalIncidentCountAggregateOutputType | null
    _avg: TechnicalIncidentAvgAggregateOutputType | null
    _sum: TechnicalIncidentSumAggregateOutputType | null
    _min: TechnicalIncidentMinAggregateOutputType | null
    _max: TechnicalIncidentMaxAggregateOutputType | null
  }

  export type TechnicalIncidentAvgAggregateOutputType = {
    id: number | null
  }

  export type TechnicalIncidentSumAggregateOutputType = {
    id: number | null
  }

  export type TechnicalIncidentMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    subcategory: string | null
    priority: string | null
    status: string | null
    affected_system: string | null
    root_cause: string | null
    resolution: string | null
    created_at: Date | null
    updated_at: Date | null
    location: string | null
    device_id: string | null
    created_by: string | null
    last_updated_by: string | null
  }

  export type TechnicalIncidentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    subcategory: string | null
    priority: string | null
    status: string | null
    affected_system: string | null
    root_cause: string | null
    resolution: string | null
    created_at: Date | null
    updated_at: Date | null
    location: string | null
    device_id: string | null
    created_by: string | null
    last_updated_by: string | null
  }

  export type TechnicalIncidentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    subcategory: number
    priority: number
    status: number
    affected_system: number
    root_cause: number
    resolution: number
    created_at: number
    updated_at: number
    location: number
    device_id: number
    created_by: number
    last_updated_by: number
    _all: number
  }


  export type TechnicalIncidentAvgAggregateInputType = {
    id?: true
  }

  export type TechnicalIncidentSumAggregateInputType = {
    id?: true
  }

  export type TechnicalIncidentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    subcategory?: true
    priority?: true
    status?: true
    affected_system?: true
    root_cause?: true
    resolution?: true
    created_at?: true
    updated_at?: true
    location?: true
    device_id?: true
    created_by?: true
    last_updated_by?: true
  }

  export type TechnicalIncidentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    subcategory?: true
    priority?: true
    status?: true
    affected_system?: true
    root_cause?: true
    resolution?: true
    created_at?: true
    updated_at?: true
    location?: true
    device_id?: true
    created_by?: true
    last_updated_by?: true
  }

  export type TechnicalIncidentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    subcategory?: true
    priority?: true
    status?: true
    affected_system?: true
    root_cause?: true
    resolution?: true
    created_at?: true
    updated_at?: true
    location?: true
    device_id?: true
    created_by?: true
    last_updated_by?: true
    _all?: true
  }

  export type TechnicalIncidentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicalIncident to aggregate.
     */
    where?: TechnicalIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalIncidents to fetch.
     */
    orderBy?: TechnicalIncidentOrderByWithRelationInput | TechnicalIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicalIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TechnicalIncidents
    **/
    _count?: true | TechnicalIncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicalIncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicalIncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicalIncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicalIncidentMaxAggregateInputType
  }

  export type GetTechnicalIncidentAggregateType<T extends TechnicalIncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnicalIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnicalIncident[P]>
      : GetScalarType<T[P], AggregateTechnicalIncident[P]>
  }




  export type TechnicalIncidentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TechnicalIncidentWhereInput
    orderBy?: TechnicalIncidentOrderByWithAggregationInput | TechnicalIncidentOrderByWithAggregationInput[]
    by: TechnicalIncidentScalarFieldEnum[] | TechnicalIncidentScalarFieldEnum
    having?: TechnicalIncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicalIncidentCountAggregateInputType | true
    _avg?: TechnicalIncidentAvgAggregateInputType
    _sum?: TechnicalIncidentSumAggregateInputType
    _min?: TechnicalIncidentMinAggregateInputType
    _max?: TechnicalIncidentMaxAggregateInputType
  }


  export type TechnicalIncidentGroupByOutputType = {
    id: number
    title: string
    description: string
    category: string | null
    subcategory: string | null
    priority: string | null
    status: string
    affected_system: string | null
    root_cause: string | null
    resolution: string | null
    created_at: Date
    updated_at: Date
    location: string | null
    device_id: string | null
    created_by: string | null
    last_updated_by: string | null
    _count: TechnicalIncidentCountAggregateOutputType | null
    _avg: TechnicalIncidentAvgAggregateOutputType | null
    _sum: TechnicalIncidentSumAggregateOutputType | null
    _min: TechnicalIncidentMinAggregateOutputType | null
    _max: TechnicalIncidentMaxAggregateOutputType | null
  }

  type GetTechnicalIncidentGroupByPayload<T extends TechnicalIncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicalIncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicalIncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicalIncidentGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicalIncidentGroupByOutputType[P]>
        }
      >
    >


  export type TechnicalIncidentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    subcategory?: boolean
    priority?: boolean
    status?: boolean
    affected_system?: boolean
    root_cause?: boolean
    resolution?: boolean
    created_at?: boolean
    updated_at?: boolean
    location?: boolean
    device_id?: boolean
    created_by?: boolean
    last_updated_by?: boolean
  }, ExtArgs["result"]["technicalIncident"]>

  export type TechnicalIncidentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    subcategory?: boolean
    priority?: boolean
    status?: boolean
    affected_system?: boolean
    root_cause?: boolean
    resolution?: boolean
    created_at?: boolean
    updated_at?: boolean
    location?: boolean
    device_id?: boolean
    created_by?: boolean
    last_updated_by?: boolean
  }


  type TechnicalIncidentGetPayload<S extends boolean | null | undefined | TechnicalIncidentArgs> = $Types.GetResult<TechnicalIncidentPayload, S>

  type TechnicalIncidentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TechnicalIncidentFindManyArgs, 'select' | 'include'> & {
      select?: TechnicalIncidentCountAggregateInputType | true
    }

  export interface TechnicalIncidentDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TechnicalIncident'], meta: { name: 'TechnicalIncident' } }
    /**
     * Find zero or one TechnicalIncident that matches the filter.
     * @param {TechnicalIncidentFindUniqueArgs} args - Arguments to find a TechnicalIncident
     * @example
     * // Get one TechnicalIncident
     * const technicalIncident = await prisma.technicalIncident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TechnicalIncidentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TechnicalIncidentFindUniqueArgs<ExtArgs>>
    ): Prisma__TechnicalIncidentClient<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TechnicalIncident that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TechnicalIncidentFindUniqueOrThrowArgs} args - Arguments to find a TechnicalIncident
     * @example
     * // Get one TechnicalIncident
     * const technicalIncident = await prisma.technicalIncident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TechnicalIncidentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnicalIncidentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TechnicalIncidentClient<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TechnicalIncident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalIncidentFindFirstArgs} args - Arguments to find a TechnicalIncident
     * @example
     * // Get one TechnicalIncident
     * const technicalIncident = await prisma.technicalIncident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TechnicalIncidentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnicalIncidentFindFirstArgs<ExtArgs>>
    ): Prisma__TechnicalIncidentClient<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TechnicalIncident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalIncidentFindFirstOrThrowArgs} args - Arguments to find a TechnicalIncident
     * @example
     * // Get one TechnicalIncident
     * const technicalIncident = await prisma.technicalIncident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TechnicalIncidentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnicalIncidentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TechnicalIncidentClient<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TechnicalIncidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalIncidentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechnicalIncidents
     * const technicalIncidents = await prisma.technicalIncident.findMany()
     * 
     * // Get first 10 TechnicalIncidents
     * const technicalIncidents = await prisma.technicalIncident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicalIncidentWithIdOnly = await prisma.technicalIncident.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TechnicalIncidentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnicalIncidentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TechnicalIncident.
     * @param {TechnicalIncidentCreateArgs} args - Arguments to create a TechnicalIncident.
     * @example
     * // Create one TechnicalIncident
     * const TechnicalIncident = await prisma.technicalIncident.create({
     *   data: {
     *     // ... data to create a TechnicalIncident
     *   }
     * })
     * 
    **/
    create<T extends TechnicalIncidentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TechnicalIncidentCreateArgs<ExtArgs>>
    ): Prisma__TechnicalIncidentClient<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a TechnicalIncident.
     * @param {TechnicalIncidentDeleteArgs} args - Arguments to delete one TechnicalIncident.
     * @example
     * // Delete one TechnicalIncident
     * const TechnicalIncident = await prisma.technicalIncident.delete({
     *   where: {
     *     // ... filter to delete one TechnicalIncident
     *   }
     * })
     * 
    **/
    delete<T extends TechnicalIncidentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TechnicalIncidentDeleteArgs<ExtArgs>>
    ): Prisma__TechnicalIncidentClient<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TechnicalIncident.
     * @param {TechnicalIncidentUpdateArgs} args - Arguments to update one TechnicalIncident.
     * @example
     * // Update one TechnicalIncident
     * const technicalIncident = await prisma.technicalIncident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TechnicalIncidentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TechnicalIncidentUpdateArgs<ExtArgs>>
    ): Prisma__TechnicalIncidentClient<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TechnicalIncidents.
     * @param {TechnicalIncidentDeleteManyArgs} args - Arguments to filter TechnicalIncidents to delete.
     * @example
     * // Delete a few TechnicalIncidents
     * const { count } = await prisma.technicalIncident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TechnicalIncidentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TechnicalIncidentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechnicalIncidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalIncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechnicalIncidents
     * const technicalIncident = await prisma.technicalIncident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TechnicalIncidentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TechnicalIncidentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TechnicalIncident.
     * @param {TechnicalIncidentUpsertArgs} args - Arguments to update or create a TechnicalIncident.
     * @example
     * // Update or create a TechnicalIncident
     * const technicalIncident = await prisma.technicalIncident.upsert({
     *   create: {
     *     // ... data to create a TechnicalIncident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechnicalIncident we want to update
     *   }
     * })
    **/
    upsert<T extends TechnicalIncidentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TechnicalIncidentUpsertArgs<ExtArgs>>
    ): Prisma__TechnicalIncidentClient<$Types.GetResult<TechnicalIncidentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TechnicalIncidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalIncidentCountArgs} args - Arguments to filter TechnicalIncidents to count.
     * @example
     * // Count the number of TechnicalIncidents
     * const count = await prisma.technicalIncident.count({
     *   where: {
     *     // ... the filter for the TechnicalIncidents we want to count
     *   }
     * })
    **/
    count<T extends TechnicalIncidentCountArgs>(
      args?: Subset<T, TechnicalIncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicalIncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechnicalIncident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalIncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TechnicalIncidentAggregateArgs>(args: Subset<T, TechnicalIncidentAggregateArgs>): Prisma.PrismaPromise<GetTechnicalIncidentAggregateType<T>>

    /**
     * Group by TechnicalIncident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicalIncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TechnicalIncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicalIncidentGroupByArgs['orderBy'] }
        : { orderBy?: TechnicalIncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TechnicalIncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicalIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TechnicalIncident model
   */
  readonly fields: TechnicalIncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechnicalIncident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TechnicalIncidentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the TechnicalIncident model
   */ 
  interface TechnicalIncidentFieldRefs {
    readonly id: FieldRef<"TechnicalIncident", 'Int'>
    readonly title: FieldRef<"TechnicalIncident", 'String'>
    readonly description: FieldRef<"TechnicalIncident", 'String'>
    readonly category: FieldRef<"TechnicalIncident", 'String'>
    readonly subcategory: FieldRef<"TechnicalIncident", 'String'>
    readonly priority: FieldRef<"TechnicalIncident", 'String'>
    readonly status: FieldRef<"TechnicalIncident", 'String'>
    readonly affected_system: FieldRef<"TechnicalIncident", 'String'>
    readonly root_cause: FieldRef<"TechnicalIncident", 'String'>
    readonly resolution: FieldRef<"TechnicalIncident", 'String'>
    readonly created_at: FieldRef<"TechnicalIncident", 'DateTime'>
    readonly updated_at: FieldRef<"TechnicalIncident", 'DateTime'>
    readonly location: FieldRef<"TechnicalIncident", 'String'>
    readonly device_id: FieldRef<"TechnicalIncident", 'String'>
    readonly created_by: FieldRef<"TechnicalIncident", 'String'>
    readonly last_updated_by: FieldRef<"TechnicalIncident", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TechnicalIncident findUnique
   */
  export type TechnicalIncidentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * Filter, which TechnicalIncident to fetch.
     */
    where: TechnicalIncidentWhereUniqueInput
  }


  /**
   * TechnicalIncident findUniqueOrThrow
   */
  export type TechnicalIncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * Filter, which TechnicalIncident to fetch.
     */
    where: TechnicalIncidentWhereUniqueInput
  }


  /**
   * TechnicalIncident findFirst
   */
  export type TechnicalIncidentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * Filter, which TechnicalIncident to fetch.
     */
    where?: TechnicalIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalIncidents to fetch.
     */
    orderBy?: TechnicalIncidentOrderByWithRelationInput | TechnicalIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicalIncidents.
     */
    cursor?: TechnicalIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicalIncidents.
     */
    distinct?: TechnicalIncidentScalarFieldEnum | TechnicalIncidentScalarFieldEnum[]
  }


  /**
   * TechnicalIncident findFirstOrThrow
   */
  export type TechnicalIncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * Filter, which TechnicalIncident to fetch.
     */
    where?: TechnicalIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalIncidents to fetch.
     */
    orderBy?: TechnicalIncidentOrderByWithRelationInput | TechnicalIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TechnicalIncidents.
     */
    cursor?: TechnicalIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TechnicalIncidents.
     */
    distinct?: TechnicalIncidentScalarFieldEnum | TechnicalIncidentScalarFieldEnum[]
  }


  /**
   * TechnicalIncident findMany
   */
  export type TechnicalIncidentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * Filter, which TechnicalIncidents to fetch.
     */
    where?: TechnicalIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TechnicalIncidents to fetch.
     */
    orderBy?: TechnicalIncidentOrderByWithRelationInput | TechnicalIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TechnicalIncidents.
     */
    cursor?: TechnicalIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TechnicalIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TechnicalIncidents.
     */
    skip?: number
    distinct?: TechnicalIncidentScalarFieldEnum | TechnicalIncidentScalarFieldEnum[]
  }


  /**
   * TechnicalIncident create
   */
  export type TechnicalIncidentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * The data needed to create a TechnicalIncident.
     */
    data: XOR<TechnicalIncidentCreateInput, TechnicalIncidentUncheckedCreateInput>
  }


  /**
   * TechnicalIncident update
   */
  export type TechnicalIncidentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * The data needed to update a TechnicalIncident.
     */
    data: XOR<TechnicalIncidentUpdateInput, TechnicalIncidentUncheckedUpdateInput>
    /**
     * Choose, which TechnicalIncident to update.
     */
    where: TechnicalIncidentWhereUniqueInput
  }


  /**
   * TechnicalIncident updateMany
   */
  export type TechnicalIncidentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TechnicalIncidents.
     */
    data: XOR<TechnicalIncidentUpdateManyMutationInput, TechnicalIncidentUncheckedUpdateManyInput>
    /**
     * Filter which TechnicalIncidents to update
     */
    where?: TechnicalIncidentWhereInput
  }


  /**
   * TechnicalIncident upsert
   */
  export type TechnicalIncidentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * The filter to search for the TechnicalIncident to update in case it exists.
     */
    where: TechnicalIncidentWhereUniqueInput
    /**
     * In case the TechnicalIncident found by the `where` argument doesn't exist, create a new TechnicalIncident with this data.
     */
    create: XOR<TechnicalIncidentCreateInput, TechnicalIncidentUncheckedCreateInput>
    /**
     * In case the TechnicalIncident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicalIncidentUpdateInput, TechnicalIncidentUncheckedUpdateInput>
  }


  /**
   * TechnicalIncident delete
   */
  export type TechnicalIncidentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
    /**
     * Filter which TechnicalIncident to delete.
     */
    where: TechnicalIncidentWhereUniqueInput
  }


  /**
   * TechnicalIncident deleteMany
   */
  export type TechnicalIncidentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TechnicalIncidents to delete
     */
    where?: TechnicalIncidentWhereInput
  }


  /**
   * TechnicalIncident without action
   */
  export type TechnicalIncidentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TechnicalIncident
     */
    select?: TechnicalIncidentSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const TechnicalIncidentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    subcategory: 'subcategory',
    priority: 'priority',
    status: 'status',
    affected_system: 'affected_system',
    root_cause: 'root_cause',
    resolution: 'resolution',
    created_at: 'created_at',
    updated_at: 'updated_at',
    location: 'location',
    device_id: 'device_id',
    created_by: 'created_by',
    last_updated_by: 'last_updated_by'
  };

  export type TechnicalIncidentScalarFieldEnum = (typeof TechnicalIncidentScalarFieldEnum)[keyof typeof TechnicalIncidentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: IntFilter<"Note"> | number
    title?: StringFilter<"Note"> | string
    content?: StringNullableFilter<"Note"> | string | null
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    content?: StringNullableFilter<"Note"> | string | null
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Note"> | number
    title?: StringWithAggregatesFilter<"Note"> | string
    content?: StringNullableWithAggregatesFilter<"Note"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type TechnicalIncidentWhereInput = {
    AND?: TechnicalIncidentWhereInput | TechnicalIncidentWhereInput[]
    OR?: TechnicalIncidentWhereInput[]
    NOT?: TechnicalIncidentWhereInput | TechnicalIncidentWhereInput[]
    id?: IntFilter<"TechnicalIncident"> | number
    title?: StringFilter<"TechnicalIncident"> | string
    description?: StringFilter<"TechnicalIncident"> | string
    category?: StringNullableFilter<"TechnicalIncident"> | string | null
    subcategory?: StringNullableFilter<"TechnicalIncident"> | string | null
    priority?: StringNullableFilter<"TechnicalIncident"> | string | null
    status?: StringFilter<"TechnicalIncident"> | string
    affected_system?: StringNullableFilter<"TechnicalIncident"> | string | null
    root_cause?: StringNullableFilter<"TechnicalIncident"> | string | null
    resolution?: StringNullableFilter<"TechnicalIncident"> | string | null
    created_at?: DateTimeFilter<"TechnicalIncident"> | Date | string
    updated_at?: DateTimeFilter<"TechnicalIncident"> | Date | string
    location?: StringNullableFilter<"TechnicalIncident"> | string | null
    device_id?: StringNullableFilter<"TechnicalIncident"> | string | null
    created_by?: StringNullableFilter<"TechnicalIncident"> | string | null
    last_updated_by?: StringNullableFilter<"TechnicalIncident"> | string | null
  }

  export type TechnicalIncidentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrder
    affected_system?: SortOrderInput | SortOrder
    root_cause?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    location?: SortOrderInput | SortOrder
    device_id?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    last_updated_by?: SortOrderInput | SortOrder
  }

  export type TechnicalIncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TechnicalIncidentWhereInput | TechnicalIncidentWhereInput[]
    OR?: TechnicalIncidentWhereInput[]
    NOT?: TechnicalIncidentWhereInput | TechnicalIncidentWhereInput[]
    title?: StringFilter<"TechnicalIncident"> | string
    description?: StringFilter<"TechnicalIncident"> | string
    category?: StringNullableFilter<"TechnicalIncident"> | string | null
    subcategory?: StringNullableFilter<"TechnicalIncident"> | string | null
    priority?: StringNullableFilter<"TechnicalIncident"> | string | null
    status?: StringFilter<"TechnicalIncident"> | string
    affected_system?: StringNullableFilter<"TechnicalIncident"> | string | null
    root_cause?: StringNullableFilter<"TechnicalIncident"> | string | null
    resolution?: StringNullableFilter<"TechnicalIncident"> | string | null
    created_at?: DateTimeFilter<"TechnicalIncident"> | Date | string
    updated_at?: DateTimeFilter<"TechnicalIncident"> | Date | string
    location?: StringNullableFilter<"TechnicalIncident"> | string | null
    device_id?: StringNullableFilter<"TechnicalIncident"> | string | null
    created_by?: StringNullableFilter<"TechnicalIncident"> | string | null
    last_updated_by?: StringNullableFilter<"TechnicalIncident"> | string | null
  }, "id">

  export type TechnicalIncidentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrder
    affected_system?: SortOrderInput | SortOrder
    root_cause?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    location?: SortOrderInput | SortOrder
    device_id?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    last_updated_by?: SortOrderInput | SortOrder
    _count?: TechnicalIncidentCountOrderByAggregateInput
    _avg?: TechnicalIncidentAvgOrderByAggregateInput
    _max?: TechnicalIncidentMaxOrderByAggregateInput
    _min?: TechnicalIncidentMinOrderByAggregateInput
    _sum?: TechnicalIncidentSumOrderByAggregateInput
  }

  export type TechnicalIncidentScalarWhereWithAggregatesInput = {
    AND?: TechnicalIncidentScalarWhereWithAggregatesInput | TechnicalIncidentScalarWhereWithAggregatesInput[]
    OR?: TechnicalIncidentScalarWhereWithAggregatesInput[]
    NOT?: TechnicalIncidentScalarWhereWithAggregatesInput | TechnicalIncidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TechnicalIncident"> | number
    title?: StringWithAggregatesFilter<"TechnicalIncident"> | string
    description?: StringWithAggregatesFilter<"TechnicalIncident"> | string
    category?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    subcategory?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    priority?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    status?: StringWithAggregatesFilter<"TechnicalIncident"> | string
    affected_system?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    root_cause?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    resolution?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"TechnicalIncident"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TechnicalIncident"> | Date | string
    location?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    device_id?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    created_by?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
    last_updated_by?: StringNullableWithAggregatesFilter<"TechnicalIncident"> | string | null
  }

  export type NoteCreateInput = {
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TechnicalIncidentCreateInput = {
    title: string
    description: string
    category?: string | null
    subcategory?: string | null
    priority?: string | null
    status?: string
    affected_system?: string | null
    root_cause?: string | null
    resolution?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    location?: string | null
    device_id?: string | null
    created_by?: string | null
    last_updated_by?: string | null
  }

  export type TechnicalIncidentUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    category?: string | null
    subcategory?: string | null
    priority?: string | null
    status?: string
    affected_system?: string | null
    root_cause?: string | null
    resolution?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    location?: string | null
    device_id?: string | null
    created_by?: string | null
    last_updated_by?: string | null
  }

  export type TechnicalIncidentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    affected_system?: NullableStringFieldUpdateOperationsInput | string | null
    root_cause?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicalIncidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    affected_system?: NullableStringFieldUpdateOperationsInput | string | null
    root_cause?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicalIncidentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    affected_system?: NullableStringFieldUpdateOperationsInput | string | null
    root_cause?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TechnicalIncidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    affected_system?: NullableStringFieldUpdateOperationsInput | string | null
    root_cause?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    device_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    last_updated_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TechnicalIncidentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    affected_system?: SortOrder
    root_cause?: SortOrder
    resolution?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    location?: SortOrder
    device_id?: SortOrder
    created_by?: SortOrder
    last_updated_by?: SortOrder
  }

  export type TechnicalIncidentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechnicalIncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    affected_system?: SortOrder
    root_cause?: SortOrder
    resolution?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    location?: SortOrder
    device_id?: SortOrder
    created_by?: SortOrder
    last_updated_by?: SortOrder
  }

  export type TechnicalIncidentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    affected_system?: SortOrder
    root_cause?: SortOrder
    resolution?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    location?: SortOrder
    device_id?: SortOrder
    created_by?: SortOrder
    last_updated_by?: SortOrder
  }

  export type TechnicalIncidentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
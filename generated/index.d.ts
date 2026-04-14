
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model AssignmentContent
 * 
 */
export type AssignmentContent = $Result.DefaultSelection<Prisma.$AssignmentContentPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Division
 * 
 */
export type Division = $Result.DefaultSelection<Prisma.$DivisionPayload>
/**
 * Model SantriProfile
 * 
 */
export type SantriProfile = $Result.DefaultSelection<Prisma.$SantriProfilePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WaliSantriRelation
 * 
 */
export type WaliSantriRelation = $Result.DefaultSelection<Prisma.$WaliSantriRelationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MENTOR: 'MENTOR',
  SANTRI: 'SANTRI',
  WALI_SANTRI: 'WALI_SANTRI'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AttendanceStatus: {
  HADIR: 'HADIR',
  SAKIT: 'SAKIT',
  IZIN: 'IZIN',
  ALFA: 'ALFA'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const SubmissionType: {
  TEXT: 'TEXT',
  FILE: 'FILE'
};

export type SubmissionType = (typeof SubmissionType)[keyof typeof SubmissionType]


export const GradingStatus: {
  PENDING: 'PENDING',
  GRADED: 'GRADED'
};

export type GradingStatus = (typeof GradingStatus)[keyof typeof GradingStatus]


export const ContentType: {
  VIDEO: 'VIDEO',
  FOTO: 'FOTO',
  TEXT: 'TEXT'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const WaliSantriCategory: {
  AYAH: 'AYAH',
  IBU: 'IBU',
  OTHER: 'OTHER'
};

export type WaliSantriCategory = (typeof WaliSantriCategory)[keyof typeof WaliSantriCategory]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type SubmissionType = $Enums.SubmissionType

export const SubmissionType: typeof $Enums.SubmissionType

export type GradingStatus = $Enums.GradingStatus

export const GradingStatus: typeof $Enums.GradingStatus

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type WaliSantriCategory = $Enums.WaliSantriCategory

export const WaliSantriCategory: typeof $Enums.WaliSantriCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Verifications
 * const verifications = await prisma.verification.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Verifications
   * const verifications = await prisma.verification.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignmentContent`: Exposes CRUD operations for the **AssignmentContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignmentContents
    * const assignmentContents = await prisma.assignmentContent.findMany()
    * ```
    */
  get assignmentContent(): Prisma.AssignmentContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.division`: Exposes CRUD operations for the **Division** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.division.findMany()
    * ```
    */
  get division(): Prisma.DivisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.santriProfile`: Exposes CRUD operations for the **SantriProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SantriProfiles
    * const santriProfiles = await prisma.santriProfile.findMany()
    * ```
    */
  get santriProfile(): Prisma.SantriProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waliSantriRelation`: Exposes CRUD operations for the **WaliSantriRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaliSantriRelations
    * const waliSantriRelations = await prisma.waliSantriRelation.findMany()
    * ```
    */
  get waliSantriRelation(): Prisma.WaliSantriRelationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Verification: 'Verification',
    Assignment: 'Assignment',
    AssignmentContent: 'AssignmentContent',
    Attendance: 'Attendance',
    Class: 'Class',
    Division: 'Division',
    SantriProfile: 'SantriProfile',
    User: 'User',
    WaliSantriRelation: 'WaliSantriRelation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "verification" | "assignment" | "assignmentContent" | "attendance" | "class" | "division" | "santriProfile" | "user" | "waliSantriRelation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      AssignmentContent: {
        payload: Prisma.$AssignmentContentPayload<ExtArgs>
        fields: Prisma.AssignmentContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          findMany: {
            args: Prisma.AssignmentContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>[]
          }
          create: {
            args: Prisma.AssignmentContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          createMany: {
            args: Prisma.AssignmentContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          update: {
            args: Prisma.AssignmentContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentContentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignmentContent>
          }
          groupBy: {
            args: Prisma.AssignmentContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentContentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentContentCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Division: {
        payload: Prisma.$DivisionPayload<ExtArgs>
        fields: Prisma.DivisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findFirst: {
            args: Prisma.DivisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findMany: {
            args: Prisma.DivisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          create: {
            args: Prisma.DivisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          createMany: {
            args: Prisma.DivisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DivisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          delete: {
            args: Prisma.DivisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          update: {
            args: Prisma.DivisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          deleteMany: {
            args: Prisma.DivisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DivisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DivisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          upsert: {
            args: Prisma.DivisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          aggregate: {
            args: Prisma.DivisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivision>
          }
          groupBy: {
            args: Prisma.DivisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisionCountArgs<ExtArgs>
            result: $Utils.Optional<DivisionCountAggregateOutputType> | number
          }
        }
      }
      SantriProfile: {
        payload: Prisma.$SantriProfilePayload<ExtArgs>
        fields: Prisma.SantriProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SantriProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SantriProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          findFirst: {
            args: Prisma.SantriProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SantriProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          findMany: {
            args: Prisma.SantriProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>[]
          }
          create: {
            args: Prisma.SantriProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          createMany: {
            args: Prisma.SantriProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SantriProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>[]
          }
          delete: {
            args: Prisma.SantriProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          update: {
            args: Prisma.SantriProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          deleteMany: {
            args: Prisma.SantriProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SantriProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SantriProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>[]
          }
          upsert: {
            args: Prisma.SantriProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SantriProfilePayload>
          }
          aggregate: {
            args: Prisma.SantriProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSantriProfile>
          }
          groupBy: {
            args: Prisma.SantriProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SantriProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SantriProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SantriProfileCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WaliSantriRelation: {
        payload: Prisma.$WaliSantriRelationPayload<ExtArgs>
        fields: Prisma.WaliSantriRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaliSantriRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaliSantriRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          findFirst: {
            args: Prisma.WaliSantriRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaliSantriRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          findMany: {
            args: Prisma.WaliSantriRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>[]
          }
          create: {
            args: Prisma.WaliSantriRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          createMany: {
            args: Prisma.WaliSantriRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaliSantriRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>[]
          }
          delete: {
            args: Prisma.WaliSantriRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          update: {
            args: Prisma.WaliSantriRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          deleteMany: {
            args: Prisma.WaliSantriRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaliSantriRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaliSantriRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>[]
          }
          upsert: {
            args: Prisma.WaliSantriRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaliSantriRelationPayload>
          }
          aggregate: {
            args: Prisma.WaliSantriRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaliSantriRelation>
          }
          groupBy: {
            args: Prisma.WaliSantriRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaliSantriRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaliSantriRelationCountArgs<ExtArgs>
            result: $Utils.Optional<WaliSantriRelationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    verification?: VerificationOmit
    assignment?: AssignmentOmit
    assignmentContent?: AssignmentContentOmit
    attendance?: AttendanceOmit
    class?: ClassOmit
    division?: DivisionOmit
    santriProfile?: SantriProfileOmit
    user?: UserOmit
    waliSantriRelation?: WaliSantriRelationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    submissions: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentContentWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    attendances: number
    assignments: number
    santri_profiles: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | ClassCountOutputTypeCountAttendancesArgs
    assignments?: boolean | ClassCountOutputTypeCountAssignmentsArgs
    santri_profiles?: boolean | ClassCountOutputTypeCountSantri_profilesArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSantri_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriProfileWhereInput
  }


  /**
   * Count Type DivisionCountOutputType
   */

  export type DivisionCountOutputType = {
    classes: number
  }

  export type DivisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | DivisionCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionCountOutputType
     */
    select?: DivisionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    verifications: number
    mentor_classes: number
    mentor_attendances: number
    santri_attendances: number
    mentor_assignments: number
    santri_submissions: number
    wali_relations: number
    santri_relations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | UserCountOutputTypeCountVerificationsArgs
    mentor_classes?: boolean | UserCountOutputTypeCountMentor_classesArgs
    mentor_attendances?: boolean | UserCountOutputTypeCountMentor_attendancesArgs
    santri_attendances?: boolean | UserCountOutputTypeCountSantri_attendancesArgs
    mentor_assignments?: boolean | UserCountOutputTypeCountMentor_assignmentsArgs
    santri_submissions?: boolean | UserCountOutputTypeCountSantri_submissionsArgs
    wali_relations?: boolean | UserCountOutputTypeCountWali_relationsArgs
    santri_relations?: boolean | UserCountOutputTypeCountSantri_relationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentor_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentor_attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSantri_attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentor_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSantri_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentContentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWali_relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliSantriRelationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSantri_relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliSantriRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    otpCode: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    otpCode: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    user_id: number
    otpCode: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    user_id?: true
    otpCode?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    otpCode?: true
    expiresAt?: true
    createdAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    user_id?: true
    otpCode?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    user_id: string
    otpCode: string
    expiresAt: Date
    createdAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    otpCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "otpCode" | "expiresAt" | "createdAt", ExtArgs["result"]["verification"]>
  export type VerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      otpCode: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly user_id: FieldRef<"Verification", 'String'>
    readonly otpCode: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    class_id: string | null
    mentor_id: string | null
    title: string | null
    description: string | null
    submission_type: $Enums.SubmissionType | null
    attachment_url: string | null
    due_date: Date | null
    created_at: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    class_id: string | null
    mentor_id: string | null
    title: string | null
    description: string | null
    submission_type: $Enums.SubmissionType | null
    attachment_url: string | null
    due_date: Date | null
    created_at: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    class_id: number
    mentor_id: number
    title: number
    description: number
    submission_type: number
    attachment_url: number
    due_date: number
    created_at: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    class_id?: true
    mentor_id?: true
    title?: true
    description?: true
    submission_type?: true
    attachment_url?: true
    due_date?: true
    created_at?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    class_id?: true
    mentor_id?: true
    title?: true
    description?: true
    submission_type?: true
    attachment_url?: true
    due_date?: true
    created_at?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    class_id?: true
    mentor_id?: true
    title?: true
    description?: true
    submission_type?: true
    attachment_url?: true
    due_date?: true
    created_at?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    class_id: string
    mentor_id: string
    title: string
    description: string | null
    submission_type: $Enums.SubmissionType
    attachment_url: string | null
    due_date: Date
    created_at: Date
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    mentor_id?: boolean
    title?: boolean
    description?: boolean
    submission_type?: boolean
    attachment_url?: boolean
    due_date?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    mentor_id?: boolean
    title?: boolean
    description?: boolean
    submission_type?: boolean
    attachment_url?: boolean
    due_date?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    mentor_id?: boolean
    title?: boolean
    description?: boolean
    submission_type?: boolean
    attachment_url?: boolean
    due_date?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    class_id?: boolean
    mentor_id?: boolean
    title?: boolean
    description?: boolean
    submission_type?: boolean
    attachment_url?: boolean
    due_date?: boolean
    created_at?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "class_id" | "mentor_id" | "title" | "description" | "submission_type" | "attachment_url" | "due_date" | "created_at", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      mentor: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$AssignmentContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      class_id: string
      mentor_id: string
      title: string
      description: string | null
      submission_type: $Enums.SubmissionType
      attachment_url: string | null
      due_date: Date
      created_at: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Assignment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly class_id: FieldRef<"Assignment", 'String'>
    readonly mentor_id: FieldRef<"Assignment", 'String'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly submission_type: FieldRef<"Assignment", 'SubmissionType'>
    readonly attachment_url: FieldRef<"Assignment", 'String'>
    readonly due_date: FieldRef<"Assignment", 'DateTime'>
    readonly created_at: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.submissions
   */
  export type Assignment$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    where?: AssignmentContentWhereInput
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    cursor?: AssignmentContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AssignmentContent
   */

  export type AggregateAssignmentContent = {
    _count: AssignmentContentCountAggregateOutputType | null
    _avg: AssignmentContentAvgAggregateOutputType | null
    _sum: AssignmentContentSumAggregateOutputType | null
    _min: AssignmentContentMinAggregateOutputType | null
    _max: AssignmentContentMaxAggregateOutputType | null
  }

  export type AssignmentContentAvgAggregateOutputType = {
    score: number | null
  }

  export type AssignmentContentSumAggregateOutputType = {
    score: number | null
  }

  export type AssignmentContentMinAggregateOutputType = {
    id: string | null
    assignment_id: string | null
    santri_id: string | null
    content_type: $Enums.ContentType | null
    score: number | null
    mentor_feedback: string | null
    status: $Enums.GradingStatus | null
    submitted_at: Date | null
  }

  export type AssignmentContentMaxAggregateOutputType = {
    id: string | null
    assignment_id: string | null
    santri_id: string | null
    content_type: $Enums.ContentType | null
    score: number | null
    mentor_feedback: string | null
    status: $Enums.GradingStatus | null
    submitted_at: Date | null
  }

  export type AssignmentContentCountAggregateOutputType = {
    id: number
    assignment_id: number
    santri_id: number
    content_type: number
    file_url: number
    score: number
    mentor_feedback: number
    status: number
    submitted_at: number
    _all: number
  }


  export type AssignmentContentAvgAggregateInputType = {
    score?: true
  }

  export type AssignmentContentSumAggregateInputType = {
    score?: true
  }

  export type AssignmentContentMinAggregateInputType = {
    id?: true
    assignment_id?: true
    santri_id?: true
    content_type?: true
    score?: true
    mentor_feedback?: true
    status?: true
    submitted_at?: true
  }

  export type AssignmentContentMaxAggregateInputType = {
    id?: true
    assignment_id?: true
    santri_id?: true
    content_type?: true
    score?: true
    mentor_feedback?: true
    status?: true
    submitted_at?: true
  }

  export type AssignmentContentCountAggregateInputType = {
    id?: true
    assignment_id?: true
    santri_id?: true
    content_type?: true
    file_url?: true
    score?: true
    mentor_feedback?: true
    status?: true
    submitted_at?: true
    _all?: true
  }

  export type AssignmentContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentContent to aggregate.
     */
    where?: AssignmentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentContents to fetch.
     */
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignmentContents
    **/
    _count?: true | AssignmentContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentContentMaxAggregateInputType
  }

  export type GetAssignmentContentAggregateType<T extends AssignmentContentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignmentContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignmentContent[P]>
      : GetScalarType<T[P], AggregateAssignmentContent[P]>
  }




  export type AssignmentContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentContentWhereInput
    orderBy?: AssignmentContentOrderByWithAggregationInput | AssignmentContentOrderByWithAggregationInput[]
    by: AssignmentContentScalarFieldEnum[] | AssignmentContentScalarFieldEnum
    having?: AssignmentContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentContentCountAggregateInputType | true
    _avg?: AssignmentContentAvgAggregateInputType
    _sum?: AssignmentContentSumAggregateInputType
    _min?: AssignmentContentMinAggregateInputType
    _max?: AssignmentContentMaxAggregateInputType
  }

  export type AssignmentContentGroupByOutputType = {
    id: string
    assignment_id: string
    santri_id: string
    content_type: $Enums.ContentType
    file_url: string[]
    score: number | null
    mentor_feedback: string | null
    status: $Enums.GradingStatus
    submitted_at: Date
    _count: AssignmentContentCountAggregateOutputType | null
    _avg: AssignmentContentAvgAggregateOutputType | null
    _sum: AssignmentContentSumAggregateOutputType | null
    _min: AssignmentContentMinAggregateOutputType | null
    _max: AssignmentContentMaxAggregateOutputType | null
  }

  type GetAssignmentContentGroupByPayload<T extends AssignmentContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentContentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentContentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignment_id?: boolean
    santri_id?: boolean
    content_type?: boolean
    file_url?: boolean
    score?: boolean
    mentor_feedback?: boolean
    status?: boolean
    submitted_at?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentContent"]>

  export type AssignmentContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignment_id?: boolean
    santri_id?: boolean
    content_type?: boolean
    file_url?: boolean
    score?: boolean
    mentor_feedback?: boolean
    status?: boolean
    submitted_at?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentContent"]>

  export type AssignmentContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignment_id?: boolean
    santri_id?: boolean
    content_type?: boolean
    file_url?: boolean
    score?: boolean
    mentor_feedback?: boolean
    status?: boolean
    submitted_at?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignmentContent"]>

  export type AssignmentContentSelectScalar = {
    id?: boolean
    assignment_id?: boolean
    santri_id?: boolean
    content_type?: boolean
    file_url?: boolean
    score?: boolean
    mentor_feedback?: boolean
    status?: boolean
    submitted_at?: boolean
  }

  export type AssignmentContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignment_id" | "santri_id" | "content_type" | "file_url" | "score" | "mentor_feedback" | "status" | "submitted_at", ExtArgs["result"]["assignmentContent"]>
  export type AssignmentContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignmentContent"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      santri: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignment_id: string
      santri_id: string
      content_type: $Enums.ContentType
      file_url: string[]
      score: number | null
      mentor_feedback: string | null
      status: $Enums.GradingStatus
      submitted_at: Date
    }, ExtArgs["result"]["assignmentContent"]>
    composites: {}
  }

  type AssignmentContentGetPayload<S extends boolean | null | undefined | AssignmentContentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentContentPayload, S>

  type AssignmentContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentContentCountAggregateInputType | true
    }

  export interface AssignmentContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignmentContent'], meta: { name: 'AssignmentContent' } }
    /**
     * Find zero or one AssignmentContent that matches the filter.
     * @param {AssignmentContentFindUniqueArgs} args - Arguments to find a AssignmentContent
     * @example
     * // Get one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentContentFindUniqueArgs>(args: SelectSubset<T, AssignmentContentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignmentContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentContentFindUniqueOrThrowArgs} args - Arguments to find a AssignmentContent
     * @example
     * // Get one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentContentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentFindFirstArgs} args - Arguments to find a AssignmentContent
     * @example
     * // Get one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentContentFindFirstArgs>(args?: SelectSubset<T, AssignmentContentFindFirstArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignmentContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentFindFirstOrThrowArgs} args - Arguments to find a AssignmentContent
     * @example
     * // Get one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentContentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignmentContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignmentContents
     * const assignmentContents = await prisma.assignmentContent.findMany()
     * 
     * // Get first 10 AssignmentContents
     * const assignmentContents = await prisma.assignmentContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentContentWithIdOnly = await prisma.assignmentContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentContentFindManyArgs>(args?: SelectSubset<T, AssignmentContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignmentContent.
     * @param {AssignmentContentCreateArgs} args - Arguments to create a AssignmentContent.
     * @example
     * // Create one AssignmentContent
     * const AssignmentContent = await prisma.assignmentContent.create({
     *   data: {
     *     // ... data to create a AssignmentContent
     *   }
     * })
     * 
     */
    create<T extends AssignmentContentCreateArgs>(args: SelectSubset<T, AssignmentContentCreateArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignmentContents.
     * @param {AssignmentContentCreateManyArgs} args - Arguments to create many AssignmentContents.
     * @example
     * // Create many AssignmentContents
     * const assignmentContent = await prisma.assignmentContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentContentCreateManyArgs>(args?: SelectSubset<T, AssignmentContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignmentContents and returns the data saved in the database.
     * @param {AssignmentContentCreateManyAndReturnArgs} args - Arguments to create many AssignmentContents.
     * @example
     * // Create many AssignmentContents
     * const assignmentContent = await prisma.assignmentContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignmentContents and only return the `id`
     * const assignmentContentWithIdOnly = await prisma.assignmentContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentContentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignmentContent.
     * @param {AssignmentContentDeleteArgs} args - Arguments to delete one AssignmentContent.
     * @example
     * // Delete one AssignmentContent
     * const AssignmentContent = await prisma.assignmentContent.delete({
     *   where: {
     *     // ... filter to delete one AssignmentContent
     *   }
     * })
     * 
     */
    delete<T extends AssignmentContentDeleteArgs>(args: SelectSubset<T, AssignmentContentDeleteArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignmentContent.
     * @param {AssignmentContentUpdateArgs} args - Arguments to update one AssignmentContent.
     * @example
     * // Update one AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentContentUpdateArgs>(args: SelectSubset<T, AssignmentContentUpdateArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignmentContents.
     * @param {AssignmentContentDeleteManyArgs} args - Arguments to filter AssignmentContents to delete.
     * @example
     * // Delete a few AssignmentContents
     * const { count } = await prisma.assignmentContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentContentDeleteManyArgs>(args?: SelectSubset<T, AssignmentContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignmentContents
     * const assignmentContent = await prisma.assignmentContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentContentUpdateManyArgs>(args: SelectSubset<T, AssignmentContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignmentContents and returns the data updated in the database.
     * @param {AssignmentContentUpdateManyAndReturnArgs} args - Arguments to update many AssignmentContents.
     * @example
     * // Update many AssignmentContents
     * const assignmentContent = await prisma.assignmentContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignmentContents and only return the `id`
     * const assignmentContentWithIdOnly = await prisma.assignmentContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentContentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignmentContent.
     * @param {AssignmentContentUpsertArgs} args - Arguments to update or create a AssignmentContent.
     * @example
     * // Update or create a AssignmentContent
     * const assignmentContent = await prisma.assignmentContent.upsert({
     *   create: {
     *     // ... data to create a AssignmentContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignmentContent we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentContentUpsertArgs>(args: SelectSubset<T, AssignmentContentUpsertArgs<ExtArgs>>): Prisma__AssignmentContentClient<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignmentContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentCountArgs} args - Arguments to filter AssignmentContents to count.
     * @example
     * // Count the number of AssignmentContents
     * const count = await prisma.assignmentContent.count({
     *   where: {
     *     // ... the filter for the AssignmentContents we want to count
     *   }
     * })
    **/
    count<T extends AssignmentContentCountArgs>(
      args?: Subset<T, AssignmentContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignmentContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentContentAggregateArgs>(args: Subset<T, AssignmentContentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentContentAggregateType<T>>

    /**
     * Group by AssignmentContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentContentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentContentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignmentContent model
   */
  readonly fields: AssignmentContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignmentContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssignmentContent model
   */
  interface AssignmentContentFieldRefs {
    readonly id: FieldRef<"AssignmentContent", 'String'>
    readonly assignment_id: FieldRef<"AssignmentContent", 'String'>
    readonly santri_id: FieldRef<"AssignmentContent", 'String'>
    readonly content_type: FieldRef<"AssignmentContent", 'ContentType'>
    readonly file_url: FieldRef<"AssignmentContent", 'String[]'>
    readonly score: FieldRef<"AssignmentContent", 'Int'>
    readonly mentor_feedback: FieldRef<"AssignmentContent", 'String'>
    readonly status: FieldRef<"AssignmentContent", 'GradingStatus'>
    readonly submitted_at: FieldRef<"AssignmentContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignmentContent findUnique
   */
  export type AssignmentContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContent to fetch.
     */
    where: AssignmentContentWhereUniqueInput
  }

  /**
   * AssignmentContent findUniqueOrThrow
   */
  export type AssignmentContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContent to fetch.
     */
    where: AssignmentContentWhereUniqueInput
  }

  /**
   * AssignmentContent findFirst
   */
  export type AssignmentContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContent to fetch.
     */
    where?: AssignmentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentContents to fetch.
     */
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentContents.
     */
    cursor?: AssignmentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentContents.
     */
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * AssignmentContent findFirstOrThrow
   */
  export type AssignmentContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContent to fetch.
     */
    where?: AssignmentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentContents to fetch.
     */
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignmentContents.
     */
    cursor?: AssignmentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentContents.
     */
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * AssignmentContent findMany
   */
  export type AssignmentContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter, which AssignmentContents to fetch.
     */
    where?: AssignmentContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignmentContents to fetch.
     */
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignmentContents.
     */
    cursor?: AssignmentContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignmentContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignmentContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignmentContents.
     */
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * AssignmentContent create
   */
  export type AssignmentContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignmentContent.
     */
    data: XOR<AssignmentContentCreateInput, AssignmentContentUncheckedCreateInput>
  }

  /**
   * AssignmentContent createMany
   */
  export type AssignmentContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignmentContents.
     */
    data: AssignmentContentCreateManyInput | AssignmentContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssignmentContent createManyAndReturn
   */
  export type AssignmentContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * The data used to create many AssignmentContents.
     */
    data: AssignmentContentCreateManyInput | AssignmentContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignmentContent update
   */
  export type AssignmentContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignmentContent.
     */
    data: XOR<AssignmentContentUpdateInput, AssignmentContentUncheckedUpdateInput>
    /**
     * Choose, which AssignmentContent to update.
     */
    where: AssignmentContentWhereUniqueInput
  }

  /**
   * AssignmentContent updateMany
   */
  export type AssignmentContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignmentContents.
     */
    data: XOR<AssignmentContentUpdateManyMutationInput, AssignmentContentUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentContents to update
     */
    where?: AssignmentContentWhereInput
    /**
     * Limit how many AssignmentContents to update.
     */
    limit?: number
  }

  /**
   * AssignmentContent updateManyAndReturn
   */
  export type AssignmentContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * The data used to update AssignmentContents.
     */
    data: XOR<AssignmentContentUpdateManyMutationInput, AssignmentContentUncheckedUpdateManyInput>
    /**
     * Filter which AssignmentContents to update
     */
    where?: AssignmentContentWhereInput
    /**
     * Limit how many AssignmentContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignmentContent upsert
   */
  export type AssignmentContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignmentContent to update in case it exists.
     */
    where: AssignmentContentWhereUniqueInput
    /**
     * In case the AssignmentContent found by the `where` argument doesn't exist, create a new AssignmentContent with this data.
     */
    create: XOR<AssignmentContentCreateInput, AssignmentContentUncheckedCreateInput>
    /**
     * In case the AssignmentContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentContentUpdateInput, AssignmentContentUncheckedUpdateInput>
  }

  /**
   * AssignmentContent delete
   */
  export type AssignmentContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    /**
     * Filter which AssignmentContent to delete.
     */
    where: AssignmentContentWhereUniqueInput
  }

  /**
   * AssignmentContent deleteMany
   */
  export type AssignmentContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignmentContents to delete
     */
    where?: AssignmentContentWhereInput
    /**
     * Limit how many AssignmentContents to delete.
     */
    limit?: number
  }

  /**
   * AssignmentContent without action
   */
  export type AssignmentContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    class_id: string | null
    santri_id: string | null
    mentor_id: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    class_id: string | null
    santri_id: string | null
    mentor_id: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    notes: string | null
    image_url: string | null
    created_at: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    class_id: number
    santri_id: number
    mentor_id: number
    date: number
    status: number
    notes: number
    image_url: number
    created_at: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    class_id?: true
    santri_id?: true
    mentor_id?: true
    date?: true
    status?: true
    notes?: true
    image_url?: true
    created_at?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    class_id?: true
    santri_id?: true
    mentor_id?: true
    date?: true
    status?: true
    notes?: true
    image_url?: true
    created_at?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    class_id?: true
    santri_id?: true
    mentor_id?: true
    date?: true
    status?: true
    notes?: true
    image_url?: true
    created_at?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    class_id: string
    santri_id: string
    mentor_id: string
    date: Date
    status: $Enums.AttendanceStatus
    notes: string | null
    image_url: string | null
    created_at: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    santri_id?: boolean
    mentor_id?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    image_url?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    santri_id?: boolean
    mentor_id?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    image_url?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    santri_id?: boolean
    mentor_id?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    image_url?: boolean
    created_at?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    class_id?: boolean
    santri_id?: boolean
    mentor_id?: boolean
    date?: boolean
    status?: boolean
    notes?: boolean
    image_url?: boolean
    created_at?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "class_id" | "santri_id" | "mentor_id" | "date" | "status" | "notes" | "image_url" | "created_at", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      santri: Prisma.$UserPayload<ExtArgs>
      mentor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      class_id: string
      santri_id: string
      mentor_id: string
      date: Date
      status: $Enums.AttendanceStatus
      notes: string | null
      image_url: string | null
      created_at: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly class_id: FieldRef<"Attendance", 'String'>
    readonly santri_id: FieldRef<"Attendance", 'String'>
    readonly mentor_id: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly notes: FieldRef<"Attendance", 'String'>
    readonly image_url: FieldRef<"Attendance", 'String'>
    readonly created_at: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    division_id: string | null
    name: string | null
    mentor_id: string | null
    created_at: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    division_id: string | null
    name: string | null
    mentor_id: string | null
    created_at: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    division_id: number
    name: number
    mentor_id: number
    created_at: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    division_id?: true
    name?: true
    mentor_id?: true
    created_at?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    division_id?: true
    name?: true
    mentor_id?: true
    created_at?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    division_id?: true
    name?: true
    mentor_id?: true
    created_at?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    division_id: string
    name: string
    mentor_id: string
    created_at: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    division_id?: boolean
    name?: boolean
    mentor_id?: boolean
    created_at?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    assignments?: boolean | Class$assignmentsArgs<ExtArgs>
    santri_profiles?: boolean | Class$santri_profilesArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    division_id?: boolean
    name?: boolean
    mentor_id?: boolean
    created_at?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    division_id?: boolean
    name?: boolean
    mentor_id?: boolean
    created_at?: boolean
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    division_id?: boolean
    name?: boolean
    mentor_id?: boolean
    created_at?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "division_id" | "name" | "mentor_id" | "created_at", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
    attendances?: boolean | Class$attendancesArgs<ExtArgs>
    assignments?: boolean | Class$assignmentsArgs<ExtArgs>
    santri_profiles?: boolean | Class$santri_profilesArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    division?: boolean | DivisionDefaultArgs<ExtArgs>
    mentor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      division: Prisma.$DivisionPayload<ExtArgs>
      mentor: Prisma.$UserPayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      santri_profiles: Prisma.$SantriProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      division_id: string
      name: string
      mentor_id: string
      created_at: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    division<T extends DivisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DivisionDefaultArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mentor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Class$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Class$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Class$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santri_profiles<T extends Class$santri_profilesArgs<ExtArgs> = {}>(args?: Subset<T, Class$santri_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly division_id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly mentor_id: FieldRef<"Class", 'String'>
    readonly created_at: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.attendances
   */
  export type Class$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Class.assignments
   */
  export type Class$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Class.santri_profiles
   */
  export type Class$santri_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    where?: SantriProfileWhereInput
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    cursor?: SantriProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SantriProfileScalarFieldEnum | SantriProfileScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Division
   */

  export type AggregateDivision = {
    _count: DivisionCountAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  export type DivisionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type DivisionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type DivisionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    _all: number
  }


  export type DivisionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type DivisionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type DivisionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type DivisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Division to aggregate.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisions
    **/
    _count?: true | DivisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionMaxAggregateInputType
  }

  export type GetDivisionAggregateType<T extends DivisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDivision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivision[P]>
      : GetScalarType<T[P], AggregateDivision[P]>
  }




  export type DivisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionWhereInput
    orderBy?: DivisionOrderByWithAggregationInput | DivisionOrderByWithAggregationInput[]
    by: DivisionScalarFieldEnum[] | DivisionScalarFieldEnum
    having?: DivisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionCountAggregateInputType | true
    _min?: DivisionMinAggregateInputType
    _max?: DivisionMaxAggregateInputType
  }

  export type DivisionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    created_at: Date
    _count: DivisionCountAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  type GetDivisionGroupByPayload<T extends DivisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionGroupByOutputType[P]>
        }
      >
    >


  export type DivisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    classes?: boolean | Division$classesArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type DivisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at", ExtArgs["result"]["division"]>
  export type DivisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | Division$classesArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DivisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DivisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DivisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Division"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      created_at: Date
    }, ExtArgs["result"]["division"]>
    composites: {}
  }

  type DivisionGetPayload<S extends boolean | null | undefined | DivisionDefaultArgs> = $Result.GetResult<Prisma.$DivisionPayload, S>

  type DivisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DivisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DivisionCountAggregateInputType | true
    }

  export interface DivisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Division'], meta: { name: 'Division' } }
    /**
     * Find zero or one Division that matches the filter.
     * @param {DivisionFindUniqueArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DivisionFindUniqueArgs>(args: SelectSubset<T, DivisionFindUniqueArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Division that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DivisionFindUniqueOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DivisionFindUniqueOrThrowArgs>(args: SelectSubset<T, DivisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DivisionFindFirstArgs>(args?: SelectSubset<T, DivisionFindFirstArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DivisionFindFirstOrThrowArgs>(args?: SelectSubset<T, DivisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.division.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.division.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisionWithIdOnly = await prisma.division.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DivisionFindManyArgs>(args?: SelectSubset<T, DivisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Division.
     * @param {DivisionCreateArgs} args - Arguments to create a Division.
     * @example
     * // Create one Division
     * const Division = await prisma.division.create({
     *   data: {
     *     // ... data to create a Division
     *   }
     * })
     * 
     */
    create<T extends DivisionCreateArgs>(args: SelectSubset<T, DivisionCreateArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Divisions.
     * @param {DivisionCreateManyArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const division = await prisma.division.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DivisionCreateManyArgs>(args?: SelectSubset<T, DivisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Divisions and returns the data saved in the database.
     * @param {DivisionCreateManyAndReturnArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const division = await prisma.division.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Divisions and only return the `id`
     * const divisionWithIdOnly = await prisma.division.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DivisionCreateManyAndReturnArgs>(args?: SelectSubset<T, DivisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Division.
     * @param {DivisionDeleteArgs} args - Arguments to delete one Division.
     * @example
     * // Delete one Division
     * const Division = await prisma.division.delete({
     *   where: {
     *     // ... filter to delete one Division
     *   }
     * })
     * 
     */
    delete<T extends DivisionDeleteArgs>(args: SelectSubset<T, DivisionDeleteArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Division.
     * @param {DivisionUpdateArgs} args - Arguments to update one Division.
     * @example
     * // Update one Division
     * const division = await prisma.division.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DivisionUpdateArgs>(args: SelectSubset<T, DivisionUpdateArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Divisions.
     * @param {DivisionDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.division.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DivisionDeleteManyArgs>(args?: SelectSubset<T, DivisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DivisionUpdateManyArgs>(args: SelectSubset<T, DivisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions and returns the data updated in the database.
     * @param {DivisionUpdateManyAndReturnArgs} args - Arguments to update many Divisions.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Divisions and only return the `id`
     * const divisionWithIdOnly = await prisma.division.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DivisionUpdateManyAndReturnArgs>(args: SelectSubset<T, DivisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Division.
     * @param {DivisionUpsertArgs} args - Arguments to update or create a Division.
     * @example
     * // Update or create a Division
     * const division = await prisma.division.upsert({
     *   create: {
     *     // ... data to create a Division
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Division we want to update
     *   }
     * })
     */
    upsert<T extends DivisionUpsertArgs>(args: SelectSubset<T, DivisionUpsertArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.division.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends DivisionCountArgs>(
      args?: Subset<T, DivisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DivisionAggregateArgs>(args: Subset<T, DivisionAggregateArgs>): Prisma.PrismaPromise<GetDivisionAggregateType<T>>

    /**
     * Group by Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionGroupByArgs} args - Group by arguments.
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
      T extends DivisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisionGroupByArgs['orderBy'] }
        : { orderBy?: DivisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DivisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Division model
   */
  readonly fields: DivisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Division.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends Division$classesArgs<ExtArgs> = {}>(args?: Subset<T, Division$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Division model
   */
  interface DivisionFieldRefs {
    readonly id: FieldRef<"Division", 'String'>
    readonly name: FieldRef<"Division", 'String'>
    readonly description: FieldRef<"Division", 'String'>
    readonly created_at: FieldRef<"Division", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Division findUnique
   */
  export type DivisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division findUniqueOrThrow
   */
  export type DivisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division findFirst
   */
  export type DivisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division findFirstOrThrow
   */
  export type DivisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division findMany
   */
  export type DivisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division create
   */
  export type DivisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Division.
     */
    data: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
  }

  /**
   * Division createMany
   */
  export type DivisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Division createManyAndReturn
   */
  export type DivisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Division update
   */
  export type DivisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Division.
     */
    data: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
    /**
     * Choose, which Division to update.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division updateMany
   */
  export type DivisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to update.
     */
    limit?: number
  }

  /**
   * Division updateManyAndReturn
   */
  export type DivisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to update.
     */
    limit?: number
  }

  /**
   * Division upsert
   */
  export type DivisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Division to update in case it exists.
     */
    where: DivisionWhereUniqueInput
    /**
     * In case the Division found by the `where` argument doesn't exist, create a new Division with this data.
     */
    create: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
    /**
     * In case the Division was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
  }

  /**
   * Division delete
   */
  export type DivisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter which Division to delete.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division deleteMany
   */
  export type DivisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisions to delete
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to delete.
     */
    limit?: number
  }

  /**
   * Division.classes
   */
  export type Division$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Division without action
   */
  export type DivisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisionInclude<ExtArgs> | null
  }


  /**
   * Model SantriProfile
   */

  export type AggregateSantriProfile = {
    _count: SantriProfileCountAggregateOutputType | null
    _min: SantriProfileMinAggregateOutputType | null
    _max: SantriProfileMaxAggregateOutputType | null
  }

  export type SantriProfileMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    nis: string | null
    birth_date: Date | null
    address: string | null
    photo_url: string | null
    class_id: string | null
  }

  export type SantriProfileMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    nis: string | null
    birth_date: Date | null
    address: string | null
    photo_url: string | null
    class_id: string | null
  }

  export type SantriProfileCountAggregateOutputType = {
    id: number
    user_id: number
    nis: number
    birth_date: number
    address: number
    photo_url: number
    class_id: number
    _all: number
  }


  export type SantriProfileMinAggregateInputType = {
    id?: true
    user_id?: true
    nis?: true
    birth_date?: true
    address?: true
    photo_url?: true
    class_id?: true
  }

  export type SantriProfileMaxAggregateInputType = {
    id?: true
    user_id?: true
    nis?: true
    birth_date?: true
    address?: true
    photo_url?: true
    class_id?: true
  }

  export type SantriProfileCountAggregateInputType = {
    id?: true
    user_id?: true
    nis?: true
    birth_date?: true
    address?: true
    photo_url?: true
    class_id?: true
    _all?: true
  }

  export type SantriProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SantriProfile to aggregate.
     */
    where?: SantriProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SantriProfiles to fetch.
     */
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SantriProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SantriProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SantriProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SantriProfiles
    **/
    _count?: true | SantriProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SantriProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SantriProfileMaxAggregateInputType
  }

  export type GetSantriProfileAggregateType<T extends SantriProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSantriProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSantriProfile[P]>
      : GetScalarType<T[P], AggregateSantriProfile[P]>
  }




  export type SantriProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SantriProfileWhereInput
    orderBy?: SantriProfileOrderByWithAggregationInput | SantriProfileOrderByWithAggregationInput[]
    by: SantriProfileScalarFieldEnum[] | SantriProfileScalarFieldEnum
    having?: SantriProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SantriProfileCountAggregateInputType | true
    _min?: SantriProfileMinAggregateInputType
    _max?: SantriProfileMaxAggregateInputType
  }

  export type SantriProfileGroupByOutputType = {
    id: string
    user_id: string
    nis: string
    birth_date: Date | null
    address: string | null
    photo_url: string | null
    class_id: string | null
    _count: SantriProfileCountAggregateOutputType | null
    _min: SantriProfileMinAggregateOutputType | null
    _max: SantriProfileMaxAggregateOutputType | null
  }

  type GetSantriProfileGroupByPayload<T extends SantriProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SantriProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SantriProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SantriProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SantriProfileGroupByOutputType[P]>
        }
      >
    >


  export type SantriProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nis?: boolean
    birth_date?: boolean
    address?: boolean
    photo_url?: boolean
    class_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }, ExtArgs["result"]["santriProfile"]>

  export type SantriProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nis?: boolean
    birth_date?: boolean
    address?: boolean
    photo_url?: boolean
    class_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }, ExtArgs["result"]["santriProfile"]>

  export type SantriProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nis?: boolean
    birth_date?: boolean
    address?: boolean
    photo_url?: boolean
    class_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }, ExtArgs["result"]["santriProfile"]>

  export type SantriProfileSelectScalar = {
    id?: boolean
    user_id?: boolean
    nis?: boolean
    birth_date?: boolean
    address?: boolean
    photo_url?: boolean
    class_id?: boolean
  }

  export type SantriProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "nis" | "birth_date" | "address" | "photo_url" | "class_id", ExtArgs["result"]["santriProfile"]>
  export type SantriProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }
  export type SantriProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }
  export type SantriProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | SantriProfile$classArgs<ExtArgs>
  }

  export type $SantriProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SantriProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      nis: string
      birth_date: Date | null
      address: string | null
      photo_url: string | null
      class_id: string | null
    }, ExtArgs["result"]["santriProfile"]>
    composites: {}
  }

  type SantriProfileGetPayload<S extends boolean | null | undefined | SantriProfileDefaultArgs> = $Result.GetResult<Prisma.$SantriProfilePayload, S>

  type SantriProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SantriProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SantriProfileCountAggregateInputType | true
    }

  export interface SantriProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SantriProfile'], meta: { name: 'SantriProfile' } }
    /**
     * Find zero or one SantriProfile that matches the filter.
     * @param {SantriProfileFindUniqueArgs} args - Arguments to find a SantriProfile
     * @example
     * // Get one SantriProfile
     * const santriProfile = await prisma.santriProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SantriProfileFindUniqueArgs>(args: SelectSubset<T, SantriProfileFindUniqueArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SantriProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SantriProfileFindUniqueOrThrowArgs} args - Arguments to find a SantriProfile
     * @example
     * // Get one SantriProfile
     * const santriProfile = await prisma.santriProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SantriProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SantriProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SantriProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileFindFirstArgs} args - Arguments to find a SantriProfile
     * @example
     * // Get one SantriProfile
     * const santriProfile = await prisma.santriProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SantriProfileFindFirstArgs>(args?: SelectSubset<T, SantriProfileFindFirstArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SantriProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileFindFirstOrThrowArgs} args - Arguments to find a SantriProfile
     * @example
     * // Get one SantriProfile
     * const santriProfile = await prisma.santriProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SantriProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SantriProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SantriProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SantriProfiles
     * const santriProfiles = await prisma.santriProfile.findMany()
     * 
     * // Get first 10 SantriProfiles
     * const santriProfiles = await prisma.santriProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const santriProfileWithIdOnly = await prisma.santriProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SantriProfileFindManyArgs>(args?: SelectSubset<T, SantriProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SantriProfile.
     * @param {SantriProfileCreateArgs} args - Arguments to create a SantriProfile.
     * @example
     * // Create one SantriProfile
     * const SantriProfile = await prisma.santriProfile.create({
     *   data: {
     *     // ... data to create a SantriProfile
     *   }
     * })
     * 
     */
    create<T extends SantriProfileCreateArgs>(args: SelectSubset<T, SantriProfileCreateArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SantriProfiles.
     * @param {SantriProfileCreateManyArgs} args - Arguments to create many SantriProfiles.
     * @example
     * // Create many SantriProfiles
     * const santriProfile = await prisma.santriProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SantriProfileCreateManyArgs>(args?: SelectSubset<T, SantriProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SantriProfiles and returns the data saved in the database.
     * @param {SantriProfileCreateManyAndReturnArgs} args - Arguments to create many SantriProfiles.
     * @example
     * // Create many SantriProfiles
     * const santriProfile = await prisma.santriProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SantriProfiles and only return the `id`
     * const santriProfileWithIdOnly = await prisma.santriProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SantriProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SantriProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SantriProfile.
     * @param {SantriProfileDeleteArgs} args - Arguments to delete one SantriProfile.
     * @example
     * // Delete one SantriProfile
     * const SantriProfile = await prisma.santriProfile.delete({
     *   where: {
     *     // ... filter to delete one SantriProfile
     *   }
     * })
     * 
     */
    delete<T extends SantriProfileDeleteArgs>(args: SelectSubset<T, SantriProfileDeleteArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SantriProfile.
     * @param {SantriProfileUpdateArgs} args - Arguments to update one SantriProfile.
     * @example
     * // Update one SantriProfile
     * const santriProfile = await prisma.santriProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SantriProfileUpdateArgs>(args: SelectSubset<T, SantriProfileUpdateArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SantriProfiles.
     * @param {SantriProfileDeleteManyArgs} args - Arguments to filter SantriProfiles to delete.
     * @example
     * // Delete a few SantriProfiles
     * const { count } = await prisma.santriProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SantriProfileDeleteManyArgs>(args?: SelectSubset<T, SantriProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SantriProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SantriProfiles
     * const santriProfile = await prisma.santriProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SantriProfileUpdateManyArgs>(args: SelectSubset<T, SantriProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SantriProfiles and returns the data updated in the database.
     * @param {SantriProfileUpdateManyAndReturnArgs} args - Arguments to update many SantriProfiles.
     * @example
     * // Update many SantriProfiles
     * const santriProfile = await prisma.santriProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SantriProfiles and only return the `id`
     * const santriProfileWithIdOnly = await prisma.santriProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SantriProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SantriProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SantriProfile.
     * @param {SantriProfileUpsertArgs} args - Arguments to update or create a SantriProfile.
     * @example
     * // Update or create a SantriProfile
     * const santriProfile = await prisma.santriProfile.upsert({
     *   create: {
     *     // ... data to create a SantriProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SantriProfile we want to update
     *   }
     * })
     */
    upsert<T extends SantriProfileUpsertArgs>(args: SelectSubset<T, SantriProfileUpsertArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SantriProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileCountArgs} args - Arguments to filter SantriProfiles to count.
     * @example
     * // Count the number of SantriProfiles
     * const count = await prisma.santriProfile.count({
     *   where: {
     *     // ... the filter for the SantriProfiles we want to count
     *   }
     * })
    **/
    count<T extends SantriProfileCountArgs>(
      args?: Subset<T, SantriProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SantriProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SantriProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SantriProfileAggregateArgs>(args: Subset<T, SantriProfileAggregateArgs>): Prisma.PrismaPromise<GetSantriProfileAggregateType<T>>

    /**
     * Group by SantriProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SantriProfileGroupByArgs} args - Group by arguments.
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
      T extends SantriProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SantriProfileGroupByArgs['orderBy'] }
        : { orderBy?: SantriProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SantriProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSantriProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SantriProfile model
   */
  readonly fields: SantriProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SantriProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SantriProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends SantriProfile$classArgs<ExtArgs> = {}>(args?: Subset<T, SantriProfile$classArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SantriProfile model
   */
  interface SantriProfileFieldRefs {
    readonly id: FieldRef<"SantriProfile", 'String'>
    readonly user_id: FieldRef<"SantriProfile", 'String'>
    readonly nis: FieldRef<"SantriProfile", 'String'>
    readonly birth_date: FieldRef<"SantriProfile", 'DateTime'>
    readonly address: FieldRef<"SantriProfile", 'String'>
    readonly photo_url: FieldRef<"SantriProfile", 'String'>
    readonly class_id: FieldRef<"SantriProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SantriProfile findUnique
   */
  export type SantriProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfile to fetch.
     */
    where: SantriProfileWhereUniqueInput
  }

  /**
   * SantriProfile findUniqueOrThrow
   */
  export type SantriProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfile to fetch.
     */
    where: SantriProfileWhereUniqueInput
  }

  /**
   * SantriProfile findFirst
   */
  export type SantriProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfile to fetch.
     */
    where?: SantriProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SantriProfiles to fetch.
     */
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SantriProfiles.
     */
    cursor?: SantriProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SantriProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SantriProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SantriProfiles.
     */
    distinct?: SantriProfileScalarFieldEnum | SantriProfileScalarFieldEnum[]
  }

  /**
   * SantriProfile findFirstOrThrow
   */
  export type SantriProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfile to fetch.
     */
    where?: SantriProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SantriProfiles to fetch.
     */
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SantriProfiles.
     */
    cursor?: SantriProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SantriProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SantriProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SantriProfiles.
     */
    distinct?: SantriProfileScalarFieldEnum | SantriProfileScalarFieldEnum[]
  }

  /**
   * SantriProfile findMany
   */
  export type SantriProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter, which SantriProfiles to fetch.
     */
    where?: SantriProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SantriProfiles to fetch.
     */
    orderBy?: SantriProfileOrderByWithRelationInput | SantriProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SantriProfiles.
     */
    cursor?: SantriProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SantriProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SantriProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SantriProfiles.
     */
    distinct?: SantriProfileScalarFieldEnum | SantriProfileScalarFieldEnum[]
  }

  /**
   * SantriProfile create
   */
  export type SantriProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SantriProfile.
     */
    data: XOR<SantriProfileCreateInput, SantriProfileUncheckedCreateInput>
  }

  /**
   * SantriProfile createMany
   */
  export type SantriProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SantriProfiles.
     */
    data: SantriProfileCreateManyInput | SantriProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SantriProfile createManyAndReturn
   */
  export type SantriProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SantriProfiles.
     */
    data: SantriProfileCreateManyInput | SantriProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SantriProfile update
   */
  export type SantriProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SantriProfile.
     */
    data: XOR<SantriProfileUpdateInput, SantriProfileUncheckedUpdateInput>
    /**
     * Choose, which SantriProfile to update.
     */
    where: SantriProfileWhereUniqueInput
  }

  /**
   * SantriProfile updateMany
   */
  export type SantriProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SantriProfiles.
     */
    data: XOR<SantriProfileUpdateManyMutationInput, SantriProfileUncheckedUpdateManyInput>
    /**
     * Filter which SantriProfiles to update
     */
    where?: SantriProfileWhereInput
    /**
     * Limit how many SantriProfiles to update.
     */
    limit?: number
  }

  /**
   * SantriProfile updateManyAndReturn
   */
  export type SantriProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * The data used to update SantriProfiles.
     */
    data: XOR<SantriProfileUpdateManyMutationInput, SantriProfileUncheckedUpdateManyInput>
    /**
     * Filter which SantriProfiles to update
     */
    where?: SantriProfileWhereInput
    /**
     * Limit how many SantriProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SantriProfile upsert
   */
  export type SantriProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SantriProfile to update in case it exists.
     */
    where: SantriProfileWhereUniqueInput
    /**
     * In case the SantriProfile found by the `where` argument doesn't exist, create a new SantriProfile with this data.
     */
    create: XOR<SantriProfileCreateInput, SantriProfileUncheckedCreateInput>
    /**
     * In case the SantriProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SantriProfileUpdateInput, SantriProfileUncheckedUpdateInput>
  }

  /**
   * SantriProfile delete
   */
  export type SantriProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    /**
     * Filter which SantriProfile to delete.
     */
    where: SantriProfileWhereUniqueInput
  }

  /**
   * SantriProfile deleteMany
   */
  export type SantriProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SantriProfiles to delete
     */
    where?: SantriProfileWhereInput
    /**
     * Limit how many SantriProfiles to delete.
     */
    limit?: number
  }

  /**
   * SantriProfile.class
   */
  export type SantriProfile$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * SantriProfile without action
   */
  export type SantriProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    password: number
    phone: number
    role: number
    is_active: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    is_active?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    is_active?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    full_name: string
    email: string
    password: string
    phone: string | null
    role: $Enums.Role
    is_active: boolean
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    santri_profile?: boolean | User$santri_profileArgs<ExtArgs>
    mentor_classes?: boolean | User$mentor_classesArgs<ExtArgs>
    mentor_attendances?: boolean | User$mentor_attendancesArgs<ExtArgs>
    santri_attendances?: boolean | User$santri_attendancesArgs<ExtArgs>
    mentor_assignments?: boolean | User$mentor_assignmentsArgs<ExtArgs>
    santri_submissions?: boolean | User$santri_submissionsArgs<ExtArgs>
    wali_relations?: boolean | User$wali_relationsArgs<ExtArgs>
    santri_relations?: boolean | User$santri_relationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "password" | "phone" | "role" | "is_active" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    santri_profile?: boolean | User$santri_profileArgs<ExtArgs>
    mentor_classes?: boolean | User$mentor_classesArgs<ExtArgs>
    mentor_attendances?: boolean | User$mentor_attendancesArgs<ExtArgs>
    santri_attendances?: boolean | User$santri_attendancesArgs<ExtArgs>
    mentor_assignments?: boolean | User$mentor_assignmentsArgs<ExtArgs>
    santri_submissions?: boolean | User$santri_submissionsArgs<ExtArgs>
    wali_relations?: boolean | User$wali_relationsArgs<ExtArgs>
    santri_relations?: boolean | User$santri_relationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      verifications: Prisma.$VerificationPayload<ExtArgs>[]
      santri_profile: Prisma.$SantriProfilePayload<ExtArgs> | null
      mentor_classes: Prisma.$ClassPayload<ExtArgs>[]
      mentor_attendances: Prisma.$AttendancePayload<ExtArgs>[]
      santri_attendances: Prisma.$AttendancePayload<ExtArgs>[]
      mentor_assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      santri_submissions: Prisma.$AssignmentContentPayload<ExtArgs>[]
      wali_relations: Prisma.$WaliSantriRelationPayload<ExtArgs>[]
      santri_relations: Prisma.$WaliSantriRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string
      password: string
      phone: string | null
      role: $Enums.Role
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verifications<T extends User$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santri_profile<T extends User$santri_profileArgs<ExtArgs> = {}>(args?: Subset<T, User$santri_profileArgs<ExtArgs>>): Prisma__SantriProfileClient<$Result.GetResult<Prisma.$SantriProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mentor_classes<T extends User$mentor_classesArgs<ExtArgs> = {}>(args?: Subset<T, User$mentor_classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentor_attendances<T extends User$mentor_attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$mentor_attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santri_attendances<T extends User$santri_attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$santri_attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentor_assignments<T extends User$mentor_assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$mentor_assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santri_submissions<T extends User$santri_submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$santri_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wali_relations<T extends User$wali_relationsArgs<ExtArgs> = {}>(args?: Subset<T, User$wali_relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    santri_relations<T extends User$santri_relationsArgs<ExtArgs> = {}>(args?: Subset<T, User$santri_relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.verifications
   */
  export type User$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    cursor?: VerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * User.santri_profile
   */
  export type User$santri_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SantriProfile
     */
    select?: SantriProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SantriProfile
     */
    omit?: SantriProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SantriProfileInclude<ExtArgs> | null
    where?: SantriProfileWhereInput
  }

  /**
   * User.mentor_classes
   */
  export type User$mentor_classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.mentor_attendances
   */
  export type User$mentor_attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.santri_attendances
   */
  export type User$santri_attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.mentor_assignments
   */
  export type User$mentor_assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.santri_submissions
   */
  export type User$santri_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentContent
     */
    select?: AssignmentContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignmentContent
     */
    omit?: AssignmentContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentContentInclude<ExtArgs> | null
    where?: AssignmentContentWhereInput
    orderBy?: AssignmentContentOrderByWithRelationInput | AssignmentContentOrderByWithRelationInput[]
    cursor?: AssignmentContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentContentScalarFieldEnum | AssignmentContentScalarFieldEnum[]
  }

  /**
   * User.wali_relations
   */
  export type User$wali_relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    where?: WaliSantriRelationWhereInput
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    cursor?: WaliSantriRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * User.santri_relations
   */
  export type User$santri_relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    where?: WaliSantriRelationWhereInput
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    cursor?: WaliSantriRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WaliSantriRelation
   */

  export type AggregateWaliSantriRelation = {
    _count: WaliSantriRelationCountAggregateOutputType | null
    _min: WaliSantriRelationMinAggregateOutputType | null
    _max: WaliSantriRelationMaxAggregateOutputType | null
  }

  export type WaliSantriRelationMinAggregateOutputType = {
    id: string | null
    wali_id: string | null
    santri_id: string | null
    category: $Enums.WaliSantriCategory | null
  }

  export type WaliSantriRelationMaxAggregateOutputType = {
    id: string | null
    wali_id: string | null
    santri_id: string | null
    category: $Enums.WaliSantriCategory | null
  }

  export type WaliSantriRelationCountAggregateOutputType = {
    id: number
    wali_id: number
    santri_id: number
    category: number
    _all: number
  }


  export type WaliSantriRelationMinAggregateInputType = {
    id?: true
    wali_id?: true
    santri_id?: true
    category?: true
  }

  export type WaliSantriRelationMaxAggregateInputType = {
    id?: true
    wali_id?: true
    santri_id?: true
    category?: true
  }

  export type WaliSantriRelationCountAggregateInputType = {
    id?: true
    wali_id?: true
    santri_id?: true
    category?: true
    _all?: true
  }

  export type WaliSantriRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliSantriRelation to aggregate.
     */
    where?: WaliSantriRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliSantriRelations to fetch.
     */
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaliSantriRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliSantriRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliSantriRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaliSantriRelations
    **/
    _count?: true | WaliSantriRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaliSantriRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaliSantriRelationMaxAggregateInputType
  }

  export type GetWaliSantriRelationAggregateType<T extends WaliSantriRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateWaliSantriRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaliSantriRelation[P]>
      : GetScalarType<T[P], AggregateWaliSantriRelation[P]>
  }




  export type WaliSantriRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaliSantriRelationWhereInput
    orderBy?: WaliSantriRelationOrderByWithAggregationInput | WaliSantriRelationOrderByWithAggregationInput[]
    by: WaliSantriRelationScalarFieldEnum[] | WaliSantriRelationScalarFieldEnum
    having?: WaliSantriRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaliSantriRelationCountAggregateInputType | true
    _min?: WaliSantriRelationMinAggregateInputType
    _max?: WaliSantriRelationMaxAggregateInputType
  }

  export type WaliSantriRelationGroupByOutputType = {
    id: string
    wali_id: string
    santri_id: string
    category: $Enums.WaliSantriCategory
    _count: WaliSantriRelationCountAggregateOutputType | null
    _min: WaliSantriRelationMinAggregateOutputType | null
    _max: WaliSantriRelationMaxAggregateOutputType | null
  }

  type GetWaliSantriRelationGroupByPayload<T extends WaliSantriRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaliSantriRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaliSantriRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaliSantriRelationGroupByOutputType[P]>
            : GetScalarType<T[P], WaliSantriRelationGroupByOutputType[P]>
        }
      >
    >


  export type WaliSantriRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wali_id?: boolean
    santri_id?: boolean
    category?: boolean
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliSantriRelation"]>

  export type WaliSantriRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wali_id?: boolean
    santri_id?: boolean
    category?: boolean
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliSantriRelation"]>

  export type WaliSantriRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wali_id?: boolean
    santri_id?: boolean
    category?: boolean
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waliSantriRelation"]>

  export type WaliSantriRelationSelectScalar = {
    id?: boolean
    wali_id?: boolean
    santri_id?: boolean
    category?: boolean
  }

  export type WaliSantriRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wali_id" | "santri_id" | "category", ExtArgs["result"]["waliSantriRelation"]>
  export type WaliSantriRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaliSantriRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaliSantriRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wali?: boolean | UserDefaultArgs<ExtArgs>
    santri?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WaliSantriRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaliSantriRelation"
    objects: {
      wali: Prisma.$UserPayload<ExtArgs>
      santri: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wali_id: string
      santri_id: string
      category: $Enums.WaliSantriCategory
    }, ExtArgs["result"]["waliSantriRelation"]>
    composites: {}
  }

  type WaliSantriRelationGetPayload<S extends boolean | null | undefined | WaliSantriRelationDefaultArgs> = $Result.GetResult<Prisma.$WaliSantriRelationPayload, S>

  type WaliSantriRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaliSantriRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaliSantriRelationCountAggregateInputType | true
    }

  export interface WaliSantriRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaliSantriRelation'], meta: { name: 'WaliSantriRelation' } }
    /**
     * Find zero or one WaliSantriRelation that matches the filter.
     * @param {WaliSantriRelationFindUniqueArgs} args - Arguments to find a WaliSantriRelation
     * @example
     * // Get one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaliSantriRelationFindUniqueArgs>(args: SelectSubset<T, WaliSantriRelationFindUniqueArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaliSantriRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaliSantriRelationFindUniqueOrThrowArgs} args - Arguments to find a WaliSantriRelation
     * @example
     * // Get one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaliSantriRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, WaliSantriRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliSantriRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationFindFirstArgs} args - Arguments to find a WaliSantriRelation
     * @example
     * // Get one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaliSantriRelationFindFirstArgs>(args?: SelectSubset<T, WaliSantriRelationFindFirstArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaliSantriRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationFindFirstOrThrowArgs} args - Arguments to find a WaliSantriRelation
     * @example
     * // Get one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaliSantriRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, WaliSantriRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaliSantriRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaliSantriRelations
     * const waliSantriRelations = await prisma.waliSantriRelation.findMany()
     * 
     * // Get first 10 WaliSantriRelations
     * const waliSantriRelations = await prisma.waliSantriRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waliSantriRelationWithIdOnly = await prisma.waliSantriRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaliSantriRelationFindManyArgs>(args?: SelectSubset<T, WaliSantriRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaliSantriRelation.
     * @param {WaliSantriRelationCreateArgs} args - Arguments to create a WaliSantriRelation.
     * @example
     * // Create one WaliSantriRelation
     * const WaliSantriRelation = await prisma.waliSantriRelation.create({
     *   data: {
     *     // ... data to create a WaliSantriRelation
     *   }
     * })
     * 
     */
    create<T extends WaliSantriRelationCreateArgs>(args: SelectSubset<T, WaliSantriRelationCreateArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaliSantriRelations.
     * @param {WaliSantriRelationCreateManyArgs} args - Arguments to create many WaliSantriRelations.
     * @example
     * // Create many WaliSantriRelations
     * const waliSantriRelation = await prisma.waliSantriRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaliSantriRelationCreateManyArgs>(args?: SelectSubset<T, WaliSantriRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaliSantriRelations and returns the data saved in the database.
     * @param {WaliSantriRelationCreateManyAndReturnArgs} args - Arguments to create many WaliSantriRelations.
     * @example
     * // Create many WaliSantriRelations
     * const waliSantriRelation = await prisma.waliSantriRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaliSantriRelations and only return the `id`
     * const waliSantriRelationWithIdOnly = await prisma.waliSantriRelation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaliSantriRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, WaliSantriRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaliSantriRelation.
     * @param {WaliSantriRelationDeleteArgs} args - Arguments to delete one WaliSantriRelation.
     * @example
     * // Delete one WaliSantriRelation
     * const WaliSantriRelation = await prisma.waliSantriRelation.delete({
     *   where: {
     *     // ... filter to delete one WaliSantriRelation
     *   }
     * })
     * 
     */
    delete<T extends WaliSantriRelationDeleteArgs>(args: SelectSubset<T, WaliSantriRelationDeleteArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaliSantriRelation.
     * @param {WaliSantriRelationUpdateArgs} args - Arguments to update one WaliSantriRelation.
     * @example
     * // Update one WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaliSantriRelationUpdateArgs>(args: SelectSubset<T, WaliSantriRelationUpdateArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaliSantriRelations.
     * @param {WaliSantriRelationDeleteManyArgs} args - Arguments to filter WaliSantriRelations to delete.
     * @example
     * // Delete a few WaliSantriRelations
     * const { count } = await prisma.waliSantriRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaliSantriRelationDeleteManyArgs>(args?: SelectSubset<T, WaliSantriRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliSantriRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaliSantriRelations
     * const waliSantriRelation = await prisma.waliSantriRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaliSantriRelationUpdateManyArgs>(args: SelectSubset<T, WaliSantriRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaliSantriRelations and returns the data updated in the database.
     * @param {WaliSantriRelationUpdateManyAndReturnArgs} args - Arguments to update many WaliSantriRelations.
     * @example
     * // Update many WaliSantriRelations
     * const waliSantriRelation = await prisma.waliSantriRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaliSantriRelations and only return the `id`
     * const waliSantriRelationWithIdOnly = await prisma.waliSantriRelation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaliSantriRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, WaliSantriRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaliSantriRelation.
     * @param {WaliSantriRelationUpsertArgs} args - Arguments to update or create a WaliSantriRelation.
     * @example
     * // Update or create a WaliSantriRelation
     * const waliSantriRelation = await prisma.waliSantriRelation.upsert({
     *   create: {
     *     // ... data to create a WaliSantriRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaliSantriRelation we want to update
     *   }
     * })
     */
    upsert<T extends WaliSantriRelationUpsertArgs>(args: SelectSubset<T, WaliSantriRelationUpsertArgs<ExtArgs>>): Prisma__WaliSantriRelationClient<$Result.GetResult<Prisma.$WaliSantriRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaliSantriRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationCountArgs} args - Arguments to filter WaliSantriRelations to count.
     * @example
     * // Count the number of WaliSantriRelations
     * const count = await prisma.waliSantriRelation.count({
     *   where: {
     *     // ... the filter for the WaliSantriRelations we want to count
     *   }
     * })
    **/
    count<T extends WaliSantriRelationCountArgs>(
      args?: Subset<T, WaliSantriRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaliSantriRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaliSantriRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaliSantriRelationAggregateArgs>(args: Subset<T, WaliSantriRelationAggregateArgs>): Prisma.PrismaPromise<GetWaliSantriRelationAggregateType<T>>

    /**
     * Group by WaliSantriRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaliSantriRelationGroupByArgs} args - Group by arguments.
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
      T extends WaliSantriRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaliSantriRelationGroupByArgs['orderBy'] }
        : { orderBy?: WaliSantriRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaliSantriRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaliSantriRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaliSantriRelation model
   */
  readonly fields: WaliSantriRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaliSantriRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaliSantriRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wali<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    santri<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaliSantriRelation model
   */
  interface WaliSantriRelationFieldRefs {
    readonly id: FieldRef<"WaliSantriRelation", 'String'>
    readonly wali_id: FieldRef<"WaliSantriRelation", 'String'>
    readonly santri_id: FieldRef<"WaliSantriRelation", 'String'>
    readonly category: FieldRef<"WaliSantriRelation", 'WaliSantriCategory'>
  }
    

  // Custom InputTypes
  /**
   * WaliSantriRelation findUnique
   */
  export type WaliSantriRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelation to fetch.
     */
    where: WaliSantriRelationWhereUniqueInput
  }

  /**
   * WaliSantriRelation findUniqueOrThrow
   */
  export type WaliSantriRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelation to fetch.
     */
    where: WaliSantriRelationWhereUniqueInput
  }

  /**
   * WaliSantriRelation findFirst
   */
  export type WaliSantriRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelation to fetch.
     */
    where?: WaliSantriRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliSantriRelations to fetch.
     */
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliSantriRelations.
     */
    cursor?: WaliSantriRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliSantriRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliSantriRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliSantriRelations.
     */
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * WaliSantriRelation findFirstOrThrow
   */
  export type WaliSantriRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelation to fetch.
     */
    where?: WaliSantriRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliSantriRelations to fetch.
     */
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaliSantriRelations.
     */
    cursor?: WaliSantriRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliSantriRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliSantriRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliSantriRelations.
     */
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * WaliSantriRelation findMany
   */
  export type WaliSantriRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter, which WaliSantriRelations to fetch.
     */
    where?: WaliSantriRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaliSantriRelations to fetch.
     */
    orderBy?: WaliSantriRelationOrderByWithRelationInput | WaliSantriRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaliSantriRelations.
     */
    cursor?: WaliSantriRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaliSantriRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaliSantriRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaliSantriRelations.
     */
    distinct?: WaliSantriRelationScalarFieldEnum | WaliSantriRelationScalarFieldEnum[]
  }

  /**
   * WaliSantriRelation create
   */
  export type WaliSantriRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a WaliSantriRelation.
     */
    data: XOR<WaliSantriRelationCreateInput, WaliSantriRelationUncheckedCreateInput>
  }

  /**
   * WaliSantriRelation createMany
   */
  export type WaliSantriRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaliSantriRelations.
     */
    data: WaliSantriRelationCreateManyInput | WaliSantriRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaliSantriRelation createManyAndReturn
   */
  export type WaliSantriRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * The data used to create many WaliSantriRelations.
     */
    data: WaliSantriRelationCreateManyInput | WaliSantriRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaliSantriRelation update
   */
  export type WaliSantriRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a WaliSantriRelation.
     */
    data: XOR<WaliSantriRelationUpdateInput, WaliSantriRelationUncheckedUpdateInput>
    /**
     * Choose, which WaliSantriRelation to update.
     */
    where: WaliSantriRelationWhereUniqueInput
  }

  /**
   * WaliSantriRelation updateMany
   */
  export type WaliSantriRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaliSantriRelations.
     */
    data: XOR<WaliSantriRelationUpdateManyMutationInput, WaliSantriRelationUncheckedUpdateManyInput>
    /**
     * Filter which WaliSantriRelations to update
     */
    where?: WaliSantriRelationWhereInput
    /**
     * Limit how many WaliSantriRelations to update.
     */
    limit?: number
  }

  /**
   * WaliSantriRelation updateManyAndReturn
   */
  export type WaliSantriRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * The data used to update WaliSantriRelations.
     */
    data: XOR<WaliSantriRelationUpdateManyMutationInput, WaliSantriRelationUncheckedUpdateManyInput>
    /**
     * Filter which WaliSantriRelations to update
     */
    where?: WaliSantriRelationWhereInput
    /**
     * Limit how many WaliSantriRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaliSantriRelation upsert
   */
  export type WaliSantriRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the WaliSantriRelation to update in case it exists.
     */
    where: WaliSantriRelationWhereUniqueInput
    /**
     * In case the WaliSantriRelation found by the `where` argument doesn't exist, create a new WaliSantriRelation with this data.
     */
    create: XOR<WaliSantriRelationCreateInput, WaliSantriRelationUncheckedCreateInput>
    /**
     * In case the WaliSantriRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaliSantriRelationUpdateInput, WaliSantriRelationUncheckedUpdateInput>
  }

  /**
   * WaliSantriRelation delete
   */
  export type WaliSantriRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
    /**
     * Filter which WaliSantriRelation to delete.
     */
    where: WaliSantriRelationWhereUniqueInput
  }

  /**
   * WaliSantriRelation deleteMany
   */
  export type WaliSantriRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaliSantriRelations to delete
     */
    where?: WaliSantriRelationWhereInput
    /**
     * Limit how many WaliSantriRelations to delete.
     */
    limit?: number
  }

  /**
   * WaliSantriRelation without action
   */
  export type WaliSantriRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaliSantriRelation
     */
    select?: WaliSantriRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaliSantriRelation
     */
    omit?: WaliSantriRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaliSantriRelationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    otpCode: 'otpCode',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    class_id: 'class_id',
    mentor_id: 'mentor_id',
    title: 'title',
    description: 'description',
    submission_type: 'submission_type',
    attachment_url: 'attachment_url',
    due_date: 'due_date',
    created_at: 'created_at'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AssignmentContentScalarFieldEnum: {
    id: 'id',
    assignment_id: 'assignment_id',
    santri_id: 'santri_id',
    content_type: 'content_type',
    file_url: 'file_url',
    score: 'score',
    mentor_feedback: 'mentor_feedback',
    status: 'status',
    submitted_at: 'submitted_at'
  };

  export type AssignmentContentScalarFieldEnum = (typeof AssignmentContentScalarFieldEnum)[keyof typeof AssignmentContentScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    class_id: 'class_id',
    santri_id: 'santri_id',
    mentor_id: 'mentor_id',
    date: 'date',
    status: 'status',
    notes: 'notes',
    image_url: 'image_url',
    created_at: 'created_at'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    division_id: 'division_id',
    name: 'name',
    mentor_id: 'mentor_id',
    created_at: 'created_at'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const DivisionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
  };

  export type DivisionScalarFieldEnum = (typeof DivisionScalarFieldEnum)[keyof typeof DivisionScalarFieldEnum]


  export const SantriProfileScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    nis: 'nis',
    birth_date: 'birth_date',
    address: 'address',
    photo_url: 'photo_url',
    class_id: 'class_id'
  };

  export type SantriProfileScalarFieldEnum = (typeof SantriProfileScalarFieldEnum)[keyof typeof SantriProfileScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WaliSantriRelationScalarFieldEnum: {
    id: 'id',
    wali_id: 'wali_id',
    santri_id: 'santri_id',
    category: 'category'
  };

  export type WaliSantriRelationScalarFieldEnum = (typeof WaliSantriRelationScalarFieldEnum)[keyof typeof WaliSantriRelationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubmissionType'
   */
  export type EnumSubmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionType'>
    


  /**
   * Reference to a field of type 'SubmissionType[]'
   */
  export type ListEnumSubmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionType[]'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GradingStatus'
   */
  export type EnumGradingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradingStatus'>
    


  /**
   * Reference to a field of type 'GradingStatus[]'
   */
  export type ListEnumGradingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradingStatus[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WaliSantriCategory'
   */
  export type EnumWaliSantriCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaliSantriCategory'>
    


  /**
   * Reference to a field of type 'WaliSantriCategory[]'
   */
  export type ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaliSantriCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    user_id?: StringFilter<"Verification"> | string
    otpCode?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_otpCode?: VerificationUser_idOtpCodeCompoundUniqueInput
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    user_id?: StringFilter<"Verification"> | string
    otpCode?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id_otpCode">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    user_id?: StringWithAggregatesFilter<"Verification"> | string
    otpCode?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    class_id?: StringFilter<"Assignment"> | string
    mentor_id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    submission_type?: EnumSubmissionTypeFilter<"Assignment"> | $Enums.SubmissionType
    attachment_url?: StringNullableFilter<"Assignment"> | string | null
    due_date?: DateTimeFilter<"Assignment"> | Date | string
    created_at?: DateTimeFilter<"Assignment"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: AssignmentContentListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    class_id?: SortOrder
    mentor_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    submission_type?: SortOrder
    attachment_url?: SortOrderInput | SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    class?: ClassOrderByWithRelationInput
    mentor?: UserOrderByWithRelationInput
    submissions?: AssignmentContentOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    class_id?: StringFilter<"Assignment"> | string
    mentor_id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    submission_type?: EnumSubmissionTypeFilter<"Assignment"> | $Enums.SubmissionType
    attachment_url?: StringNullableFilter<"Assignment"> | string | null
    due_date?: DateTimeFilter<"Assignment"> | Date | string
    created_at?: DateTimeFilter<"Assignment"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: AssignmentContentListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    class_id?: SortOrder
    mentor_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    submission_type?: SortOrder
    attachment_url?: SortOrderInput | SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    class_id?: StringWithAggregatesFilter<"Assignment"> | string
    mentor_id?: StringWithAggregatesFilter<"Assignment"> | string
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    submission_type?: EnumSubmissionTypeWithAggregatesFilter<"Assignment"> | $Enums.SubmissionType
    attachment_url?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    due_date?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type AssignmentContentWhereInput = {
    AND?: AssignmentContentWhereInput | AssignmentContentWhereInput[]
    OR?: AssignmentContentWhereInput[]
    NOT?: AssignmentContentWhereInput | AssignmentContentWhereInput[]
    id?: StringFilter<"AssignmentContent"> | string
    assignment_id?: StringFilter<"AssignmentContent"> | string
    santri_id?: StringFilter<"AssignmentContent"> | string
    content_type?: EnumContentTypeFilter<"AssignmentContent"> | $Enums.ContentType
    file_url?: StringNullableListFilter<"AssignmentContent">
    score?: IntNullableFilter<"AssignmentContent"> | number | null
    mentor_feedback?: StringNullableFilter<"AssignmentContent"> | string | null
    status?: EnumGradingStatusFilter<"AssignmentContent"> | $Enums.GradingStatus
    submitted_at?: DateTimeFilter<"AssignmentContent"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssignmentContentOrderByWithRelationInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    santri_id?: SortOrder
    content_type?: SortOrder
    file_url?: SortOrder
    score?: SortOrderInput | SortOrder
    mentor_feedback?: SortOrderInput | SortOrder
    status?: SortOrder
    submitted_at?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    santri?: UserOrderByWithRelationInput
  }

  export type AssignmentContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assignment_id_santri_id?: AssignmentContentAssignment_idSantri_idCompoundUniqueInput
    AND?: AssignmentContentWhereInput | AssignmentContentWhereInput[]
    OR?: AssignmentContentWhereInput[]
    NOT?: AssignmentContentWhereInput | AssignmentContentWhereInput[]
    assignment_id?: StringFilter<"AssignmentContent"> | string
    santri_id?: StringFilter<"AssignmentContent"> | string
    content_type?: EnumContentTypeFilter<"AssignmentContent"> | $Enums.ContentType
    file_url?: StringNullableListFilter<"AssignmentContent">
    score?: IntNullableFilter<"AssignmentContent"> | number | null
    mentor_feedback?: StringNullableFilter<"AssignmentContent"> | string | null
    status?: EnumGradingStatusFilter<"AssignmentContent"> | $Enums.GradingStatus
    submitted_at?: DateTimeFilter<"AssignmentContent"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "assignment_id_santri_id">

  export type AssignmentContentOrderByWithAggregationInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    santri_id?: SortOrder
    content_type?: SortOrder
    file_url?: SortOrder
    score?: SortOrderInput | SortOrder
    mentor_feedback?: SortOrderInput | SortOrder
    status?: SortOrder
    submitted_at?: SortOrder
    _count?: AssignmentContentCountOrderByAggregateInput
    _avg?: AssignmentContentAvgOrderByAggregateInput
    _max?: AssignmentContentMaxOrderByAggregateInput
    _min?: AssignmentContentMinOrderByAggregateInput
    _sum?: AssignmentContentSumOrderByAggregateInput
  }

  export type AssignmentContentScalarWhereWithAggregatesInput = {
    AND?: AssignmentContentScalarWhereWithAggregatesInput | AssignmentContentScalarWhereWithAggregatesInput[]
    OR?: AssignmentContentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentContentScalarWhereWithAggregatesInput | AssignmentContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssignmentContent"> | string
    assignment_id?: StringWithAggregatesFilter<"AssignmentContent"> | string
    santri_id?: StringWithAggregatesFilter<"AssignmentContent"> | string
    content_type?: EnumContentTypeWithAggregatesFilter<"AssignmentContent"> | $Enums.ContentType
    file_url?: StringNullableListFilter<"AssignmentContent">
    score?: IntNullableWithAggregatesFilter<"AssignmentContent"> | number | null
    mentor_feedback?: StringNullableWithAggregatesFilter<"AssignmentContent"> | string | null
    status?: EnumGradingStatusWithAggregatesFilter<"AssignmentContent"> | $Enums.GradingStatus
    submitted_at?: DateTimeWithAggregatesFilter<"AssignmentContent"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    class_id?: StringFilter<"Attendance"> | string
    santri_id?: StringFilter<"Attendance"> | string
    mentor_id?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    image_url?: StringNullableFilter<"Attendance"> | string | null
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    class_id?: SortOrder
    santri_id?: SortOrder
    mentor_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    class?: ClassOrderByWithRelationInput
    santri?: UserOrderByWithRelationInput
    mentor?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    class_id_santri_id_date?: AttendanceClass_idSantri_idDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    class_id?: StringFilter<"Attendance"> | string
    santri_id?: StringFilter<"Attendance"> | string
    mentor_id?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    image_url?: StringNullableFilter<"Attendance"> | string | null
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "class_id_santri_id_date">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    class_id?: SortOrder
    santri_id?: SortOrder
    mentor_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    class_id?: StringWithAggregatesFilter<"Attendance"> | string
    santri_id?: StringWithAggregatesFilter<"Attendance"> | string
    mentor_id?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    division_id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    mentor_id?: StringFilter<"Class"> | string
    created_at?: DateTimeFilter<"Class"> | Date | string
    division?: XOR<DivisionScalarRelationFilter, DivisionWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendances?: AttendanceListRelationFilter
    assignments?: AssignmentListRelationFilter
    santri_profiles?: SantriProfileListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    division_id?: SortOrder
    name?: SortOrder
    mentor_id?: SortOrder
    created_at?: SortOrder
    division?: DivisionOrderByWithRelationInput
    mentor?: UserOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    santri_profiles?: SantriProfileOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    division_id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    mentor_id?: StringFilter<"Class"> | string
    created_at?: DateTimeFilter<"Class"> | Date | string
    division?: XOR<DivisionScalarRelationFilter, DivisionWhereInput>
    mentor?: XOR<UserScalarRelationFilter, UserWhereInput>
    attendances?: AttendanceListRelationFilter
    assignments?: AssignmentListRelationFilter
    santri_profiles?: SantriProfileListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    division_id?: SortOrder
    name?: SortOrder
    mentor_id?: SortOrder
    created_at?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    division_id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    mentor_id?: StringWithAggregatesFilter<"Class"> | string
    created_at?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type DivisionWhereInput = {
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    id?: StringFilter<"Division"> | string
    name?: StringFilter<"Division"> | string
    description?: StringNullableFilter<"Division"> | string | null
    created_at?: DateTimeFilter<"Division"> | Date | string
    classes?: ClassListRelationFilter
  }

  export type DivisionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
  }

  export type DivisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    name?: StringFilter<"Division"> | string
    description?: StringNullableFilter<"Division"> | string | null
    created_at?: DateTimeFilter<"Division"> | Date | string
    classes?: ClassListRelationFilter
  }, "id">

  export type DivisionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: DivisionCountOrderByAggregateInput
    _max?: DivisionMaxOrderByAggregateInput
    _min?: DivisionMinOrderByAggregateInput
  }

  export type DivisionScalarWhereWithAggregatesInput = {
    AND?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    OR?: DivisionScalarWhereWithAggregatesInput[]
    NOT?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Division"> | string
    name?: StringWithAggregatesFilter<"Division"> | string
    description?: StringNullableWithAggregatesFilter<"Division"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Division"> | Date | string
  }

  export type SantriProfileWhereInput = {
    AND?: SantriProfileWhereInput | SantriProfileWhereInput[]
    OR?: SantriProfileWhereInput[]
    NOT?: SantriProfileWhereInput | SantriProfileWhereInput[]
    id?: StringFilter<"SantriProfile"> | string
    user_id?: StringFilter<"SantriProfile"> | string
    nis?: StringFilter<"SantriProfile"> | string
    birth_date?: DateTimeNullableFilter<"SantriProfile"> | Date | string | null
    address?: StringNullableFilter<"SantriProfile"> | string | null
    photo_url?: StringNullableFilter<"SantriProfile"> | string | null
    class_id?: StringNullableFilter<"SantriProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }

  export type SantriProfileOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    nis?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    photo_url?: SortOrderInput | SortOrder
    class_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type SantriProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    nis?: string
    AND?: SantriProfileWhereInput | SantriProfileWhereInput[]
    OR?: SantriProfileWhereInput[]
    NOT?: SantriProfileWhereInput | SantriProfileWhereInput[]
    birth_date?: DateTimeNullableFilter<"SantriProfile"> | Date | string | null
    address?: StringNullableFilter<"SantriProfile"> | string | null
    photo_url?: StringNullableFilter<"SantriProfile"> | string | null
    class_id?: StringNullableFilter<"SantriProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
  }, "id" | "user_id" | "nis">

  export type SantriProfileOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    nis?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    photo_url?: SortOrderInput | SortOrder
    class_id?: SortOrderInput | SortOrder
    _count?: SantriProfileCountOrderByAggregateInput
    _max?: SantriProfileMaxOrderByAggregateInput
    _min?: SantriProfileMinOrderByAggregateInput
  }

  export type SantriProfileScalarWhereWithAggregatesInput = {
    AND?: SantriProfileScalarWhereWithAggregatesInput | SantriProfileScalarWhereWithAggregatesInput[]
    OR?: SantriProfileScalarWhereWithAggregatesInput[]
    NOT?: SantriProfileScalarWhereWithAggregatesInput | SantriProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SantriProfile"> | string
    user_id?: StringWithAggregatesFilter<"SantriProfile"> | string
    nis?: StringWithAggregatesFilter<"SantriProfile"> | string
    birth_date?: DateTimeNullableWithAggregatesFilter<"SantriProfile"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"SantriProfile"> | string | null
    photo_url?: StringNullableWithAggregatesFilter<"SantriProfile"> | string | null
    class_id?: StringNullableWithAggregatesFilter<"SantriProfile"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    verifications?: VerificationListRelationFilter
    santri_profile?: XOR<SantriProfileNullableScalarRelationFilter, SantriProfileWhereInput> | null
    mentor_classes?: ClassListRelationFilter
    mentor_attendances?: AttendanceListRelationFilter
    santri_attendances?: AttendanceListRelationFilter
    mentor_assignments?: AssignmentListRelationFilter
    santri_submissions?: AssignmentContentListRelationFilter
    wali_relations?: WaliSantriRelationListRelationFilter
    santri_relations?: WaliSantriRelationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    verifications?: VerificationOrderByRelationAggregateInput
    santri_profile?: SantriProfileOrderByWithRelationInput
    mentor_classes?: ClassOrderByRelationAggregateInput
    mentor_attendances?: AttendanceOrderByRelationAggregateInput
    santri_attendances?: AttendanceOrderByRelationAggregateInput
    mentor_assignments?: AssignmentOrderByRelationAggregateInput
    santri_submissions?: AssignmentContentOrderByRelationAggregateInput
    wali_relations?: WaliSantriRelationOrderByRelationAggregateInput
    santri_relations?: WaliSantriRelationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    verifications?: VerificationListRelationFilter
    santri_profile?: XOR<SantriProfileNullableScalarRelationFilter, SantriProfileWhereInput> | null
    mentor_classes?: ClassListRelationFilter
    mentor_attendances?: AttendanceListRelationFilter
    santri_attendances?: AttendanceListRelationFilter
    mentor_assignments?: AssignmentListRelationFilter
    santri_submissions?: AssignmentContentListRelationFilter
    wali_relations?: WaliSantriRelationListRelationFilter
    santri_relations?: WaliSantriRelationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WaliSantriRelationWhereInput = {
    AND?: WaliSantriRelationWhereInput | WaliSantriRelationWhereInput[]
    OR?: WaliSantriRelationWhereInput[]
    NOT?: WaliSantriRelationWhereInput | WaliSantriRelationWhereInput[]
    id?: StringFilter<"WaliSantriRelation"> | string
    wali_id?: StringFilter<"WaliSantriRelation"> | string
    santri_id?: StringFilter<"WaliSantriRelation"> | string
    category?: EnumWaliSantriCategoryFilter<"WaliSantriRelation"> | $Enums.WaliSantriCategory
    wali?: XOR<UserScalarRelationFilter, UserWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WaliSantriRelationOrderByWithRelationInput = {
    id?: SortOrder
    wali_id?: SortOrder
    santri_id?: SortOrder
    category?: SortOrder
    wali?: UserOrderByWithRelationInput
    santri?: UserOrderByWithRelationInput
  }

  export type WaliSantriRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wali_id_santri_id?: WaliSantriRelationWali_idSantri_idCompoundUniqueInput
    AND?: WaliSantriRelationWhereInput | WaliSantriRelationWhereInput[]
    OR?: WaliSantriRelationWhereInput[]
    NOT?: WaliSantriRelationWhereInput | WaliSantriRelationWhereInput[]
    wali_id?: StringFilter<"WaliSantriRelation"> | string
    santri_id?: StringFilter<"WaliSantriRelation"> | string
    category?: EnumWaliSantriCategoryFilter<"WaliSantriRelation"> | $Enums.WaliSantriCategory
    wali?: XOR<UserScalarRelationFilter, UserWhereInput>
    santri?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "wali_id_santri_id">

  export type WaliSantriRelationOrderByWithAggregationInput = {
    id?: SortOrder
    wali_id?: SortOrder
    santri_id?: SortOrder
    category?: SortOrder
    _count?: WaliSantriRelationCountOrderByAggregateInput
    _max?: WaliSantriRelationMaxOrderByAggregateInput
    _min?: WaliSantriRelationMinOrderByAggregateInput
  }

  export type WaliSantriRelationScalarWhereWithAggregatesInput = {
    AND?: WaliSantriRelationScalarWhereWithAggregatesInput | WaliSantriRelationScalarWhereWithAggregatesInput[]
    OR?: WaliSantriRelationScalarWhereWithAggregatesInput[]
    NOT?: WaliSantriRelationScalarWhereWithAggregatesInput | WaliSantriRelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaliSantriRelation"> | string
    wali_id?: StringWithAggregatesFilter<"WaliSantriRelation"> | string
    santri_id?: StringWithAggregatesFilter<"WaliSantriRelation"> | string
    category?: EnumWaliSantriCategoryWithAggregatesFilter<"WaliSantriRelation"> | $Enums.WaliSantriCategory
  }

  export type VerificationCreateInput = {
    id?: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVerificationsInput
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    user_id: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: string
    user_id: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    mentor: UserCreateNestedOneWithoutMentor_assignmentsInput
    submissions?: AssignmentContentCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    class_id: string
    mentor_id: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
    submissions?: AssignmentContentUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_assignmentsNestedInput
    submissions?: AssignmentContentUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentContentUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    class_id: string
    mentor_id: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentCreateInput = {
    id?: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    santri: UserCreateNestedOneWithoutSantri_submissionsInput
  }

  export type AssignmentContentUncheckedCreateInput = {
    id?: string
    assignment_id: string
    santri_id: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
  }

  export type AssignmentContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    santri?: UserUpdateOneRequiredWithoutSantri_submissionsNestedInput
  }

  export type AssignmentContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignment_id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentCreateManyInput = {
    id?: string
    assignment_id: string
    santri_id: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
  }

  export type AssignmentContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignment_id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    santri: UserCreateNestedOneWithoutSantri_attendancesInput
    mentor: UserCreateNestedOneWithoutMentor_attendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    class_id: string
    santri_id: string
    mentor_id: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    santri?: UserUpdateOneRequiredWithoutSantri_attendancesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_attendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    class_id: string
    santri_id: string
    mentor_id: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentor_classesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    division_id: string
    name: string
    mentor_id: string
    created_at?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_classesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    division_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    division_id: string
    name: string
    mentor_id: string
    created_at?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    division_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisionCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    classes?: ClassCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
  }

  export type DivisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriProfileCreateInput = {
    id?: string
    nis: string
    birth_date?: Date | string | null
    address?: string | null
    photo_url?: string | null
    user: UserCreateNestedOneWithoutSantri_profileInput
    class?: ClassCreateNestedOneWithoutSantri_profilesInput
  }

  export type SantriProfileUncheckedCreateInput = {
    id?: string
    user_id: string
    nis: string
    birth_date?: Date | string | null
    address?: string | null
    photo_url?: string | null
    class_id?: string | null
  }

  export type SantriProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSantri_profileNestedInput
    class?: ClassUpdateOneWithoutSantri_profilesNestedInput
  }

  export type SantriProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SantriProfileCreateManyInput = {
    id?: string
    user_id: string
    nis: string
    birth_date?: Date | string | null
    address?: string | null
    photo_url?: string | null
    class_id?: string | null
  }

  export type SantriProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SantriProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliSantriRelationCreateInput = {
    id?: string
    category?: $Enums.WaliSantriCategory
    wali: UserCreateNestedOneWithoutWali_relationsInput
    santri: UserCreateNestedOneWithoutSantri_relationsInput
  }

  export type WaliSantriRelationUncheckedCreateInput = {
    id?: string
    wali_id: string
    santri_id: string
    category?: $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    wali?: UserUpdateOneRequiredWithoutWali_relationsNestedInput
    santri?: UserUpdateOneRequiredWithoutSantri_relationsNestedInput
  }

  export type WaliSantriRelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wali_id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationCreateManyInput = {
    id?: string
    wali_id: string
    santri_id: string
    category?: $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wali_id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VerificationUser_idOtpCodeCompoundUniqueInput = {
    user_id: string
    otpCode: string
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    otpCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSubmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionType | EnumSubmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionTypeFilter<$PrismaModel> | $Enums.SubmissionType
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type AssignmentContentListRelationFilter = {
    every?: AssignmentContentWhereInput
    some?: AssignmentContentWhereInput
    none?: AssignmentContentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssignmentContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    mentor_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    submission_type?: SortOrder
    attachment_url?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    mentor_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    submission_type?: SortOrder
    attachment_url?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    mentor_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    submission_type?: SortOrder
    attachment_url?: SortOrder
    due_date?: SortOrder
    created_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSubmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionType | EnumSubmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubmissionTypeFilter<$PrismaModel>
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGradingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GradingStatus | EnumGradingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradingStatusFilter<$PrismaModel> | $Enums.GradingStatus
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type AssignmentContentAssignment_idSantri_idCompoundUniqueInput = {
    assignment_id: string
    santri_id: string
  }

  export type AssignmentContentCountOrderByAggregateInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    santri_id?: SortOrder
    content_type?: SortOrder
    file_url?: SortOrder
    score?: SortOrder
    mentor_feedback?: SortOrder
    status?: SortOrder
    submitted_at?: SortOrder
  }

  export type AssignmentContentAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AssignmentContentMaxOrderByAggregateInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    santri_id?: SortOrder
    content_type?: SortOrder
    score?: SortOrder
    mentor_feedback?: SortOrder
    status?: SortOrder
    submitted_at?: SortOrder
  }

  export type AssignmentContentMinOrderByAggregateInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    santri_id?: SortOrder
    content_type?: SortOrder
    score?: SortOrder
    mentor_feedback?: SortOrder
    status?: SortOrder
    submitted_at?: SortOrder
  }

  export type AssignmentContentSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGradingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradingStatus | EnumGradingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradingStatusWithAggregatesFilter<$PrismaModel> | $Enums.GradingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradingStatusFilter<$PrismaModel>
    _max?: NestedEnumGradingStatusFilter<$PrismaModel>
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type AttendanceClass_idSantri_idDateCompoundUniqueInput = {
    class_id: string
    santri_id: string
    date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    santri_id?: SortOrder
    mentor_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    santri_id?: SortOrder
    mentor_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    santri_id?: SortOrder
    mentor_id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type DivisionScalarRelationFilter = {
    is?: DivisionWhereInput
    isNot?: DivisionWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type SantriProfileListRelationFilter = {
    every?: SantriProfileWhereInput
    some?: SantriProfileWhereInput
    none?: SantriProfileWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SantriProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    division_id?: SortOrder
    name?: SortOrder
    mentor_id?: SortOrder
    created_at?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    division_id?: SortOrder
    name?: SortOrder
    mentor_id?: SortOrder
    created_at?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    division_id?: SortOrder
    name?: SortOrder
    mentor_id?: SortOrder
    created_at?: SortOrder
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DivisionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type DivisionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type DivisionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClassNullableScalarRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type SantriProfileCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nis?: SortOrder
    birth_date?: SortOrder
    address?: SortOrder
    photo_url?: SortOrder
    class_id?: SortOrder
  }

  export type SantriProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nis?: SortOrder
    birth_date?: SortOrder
    address?: SortOrder
    photo_url?: SortOrder
    class_id?: SortOrder
  }

  export type SantriProfileMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nis?: SortOrder
    birth_date?: SortOrder
    address?: SortOrder
    photo_url?: SortOrder
    class_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VerificationListRelationFilter = {
    every?: VerificationWhereInput
    some?: VerificationWhereInput
    none?: VerificationWhereInput
  }

  export type SantriProfileNullableScalarRelationFilter = {
    is?: SantriProfileWhereInput | null
    isNot?: SantriProfileWhereInput | null
  }

  export type WaliSantriRelationListRelationFilter = {
    every?: WaliSantriRelationWhereInput
    some?: WaliSantriRelationWhereInput
    none?: WaliSantriRelationWhereInput
  }

  export type VerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaliSantriRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumWaliSantriCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.WaliSantriCategory | EnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWaliSantriCategoryFilter<$PrismaModel> | $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationWali_idSantri_idCompoundUniqueInput = {
    wali_id: string
    santri_id: string
  }

  export type WaliSantriRelationCountOrderByAggregateInput = {
    id?: SortOrder
    wali_id?: SortOrder
    santri_id?: SortOrder
    category?: SortOrder
  }

  export type WaliSantriRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    wali_id?: SortOrder
    santri_id?: SortOrder
    category?: SortOrder
  }

  export type WaliSantriRelationMinOrderByAggregateInput = {
    id?: SortOrder
    wali_id?: SortOrder
    santri_id?: SortOrder
    category?: SortOrder
  }

  export type EnumWaliSantriCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaliSantriCategory | EnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWaliSantriCategoryWithAggregatesFilter<$PrismaModel> | $Enums.WaliSantriCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaliSantriCategoryFilter<$PrismaModel>
    _max?: NestedEnumWaliSantriCategoryFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    upsert?: UserUpsertWithoutVerificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationsInput, UserUpdateWithoutVerificationsInput>, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type ClassCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAssignmentsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMentor_assignmentsInput = {
    create?: XOR<UserCreateWithoutMentor_assignmentsInput, UserUncheckedCreateWithoutMentor_assignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentor_assignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentContentCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput> | AssignmentContentCreateWithoutAssignmentInput[] | AssignmentContentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutAssignmentInput | AssignmentContentCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentContentCreateManyAssignmentInputEnvelope
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
  }

  export type AssignmentContentUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput> | AssignmentContentCreateWithoutAssignmentInput[] | AssignmentContentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutAssignmentInput | AssignmentContentCreateOrConnectWithoutAssignmentInput[]
    createMany?: AssignmentContentCreateManyAssignmentInputEnvelope
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSubmissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionType
  }

  export type ClassUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAssignmentsInput
    upsert?: ClassUpsertWithoutAssignmentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAssignmentsInput, ClassUpdateWithoutAssignmentsInput>, ClassUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutMentor_assignmentsNestedInput = {
    create?: XOR<UserCreateWithoutMentor_assignmentsInput, UserUncheckedCreateWithoutMentor_assignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentor_assignmentsInput
    upsert?: UserUpsertWithoutMentor_assignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentor_assignmentsInput, UserUpdateWithoutMentor_assignmentsInput>, UserUncheckedUpdateWithoutMentor_assignmentsInput>
  }

  export type AssignmentContentUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput> | AssignmentContentCreateWithoutAssignmentInput[] | AssignmentContentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutAssignmentInput | AssignmentContentCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentContentCreateManyAssignmentInputEnvelope
    set?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    disconnect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    delete?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    update?: AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentContentUpdateManyWithWhereWithoutAssignmentInput | AssignmentContentUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
  }

  export type AssignmentContentUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput> | AssignmentContentCreateWithoutAssignmentInput[] | AssignmentContentUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutAssignmentInput | AssignmentContentCreateOrConnectWithoutAssignmentInput[]
    upsert?: AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput | AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AssignmentContentCreateManyAssignmentInputEnvelope
    set?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    disconnect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    delete?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    update?: AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput | AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AssignmentContentUpdateManyWithWhereWithoutAssignmentInput | AssignmentContentUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
  }

  export type AssignmentContentCreatefile_urlInput = {
    set: string[]
  }

  export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSantri_submissionsInput = {
    create?: XOR<UserCreateWithoutSantri_submissionsInput, UserUncheckedCreateWithoutSantri_submissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantri_submissionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type AssignmentContentUpdatefile_urlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGradingStatusFieldUpdateOperationsInput = {
    set?: $Enums.GradingStatus
  }

  export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssignmentUpsertWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, AssignmentUpdateWithoutSubmissionsInput>, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutSantri_submissionsNestedInput = {
    create?: XOR<UserCreateWithoutSantri_submissionsInput, UserUncheckedCreateWithoutSantri_submissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantri_submissionsInput
    upsert?: UserUpsertWithoutSantri_submissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantri_submissionsInput, UserUpdateWithoutSantri_submissionsInput>, UserUncheckedUpdateWithoutSantri_submissionsInput>
  }

  export type ClassCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSantri_attendancesInput = {
    create?: XOR<UserCreateWithoutSantri_attendancesInput, UserUncheckedCreateWithoutSantri_attendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantri_attendancesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMentor_attendancesInput = {
    create?: XOR<UserCreateWithoutMentor_attendancesInput, UserUncheckedCreateWithoutMentor_attendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentor_attendancesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type ClassUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendancesInput
    upsert?: ClassUpsertWithoutAttendancesInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAttendancesInput, ClassUpdateWithoutAttendancesInput>, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateOneRequiredWithoutSantri_attendancesNestedInput = {
    create?: XOR<UserCreateWithoutSantri_attendancesInput, UserUncheckedCreateWithoutSantri_attendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantri_attendancesInput
    upsert?: UserUpsertWithoutSantri_attendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantri_attendancesInput, UserUpdateWithoutSantri_attendancesInput>, UserUncheckedUpdateWithoutSantri_attendancesInput>
  }

  export type UserUpdateOneRequiredWithoutMentor_attendancesNestedInput = {
    create?: XOR<UserCreateWithoutMentor_attendancesInput, UserUncheckedCreateWithoutMentor_attendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentor_attendancesInput
    upsert?: UserUpsertWithoutMentor_attendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentor_attendancesInput, UserUpdateWithoutMentor_attendancesInput>, UserUncheckedUpdateWithoutMentor_attendancesInput>
  }

  export type DivisionCreateNestedOneWithoutClassesInput = {
    create?: XOR<DivisionCreateWithoutClassesInput, DivisionUncheckedCreateWithoutClassesInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutClassesInput
    connect?: DivisionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMentor_classesInput = {
    create?: XOR<UserCreateWithoutMentor_classesInput, UserUncheckedCreateWithoutMentor_classesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentor_classesInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutClassInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type SantriProfileCreateNestedManyWithoutClassInput = {
    create?: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput> | SantriProfileCreateWithoutClassInput[] | SantriProfileUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SantriProfileCreateOrConnectWithoutClassInput | SantriProfileCreateOrConnectWithoutClassInput[]
    createMany?: SantriProfileCreateManyClassInputEnvelope
    connect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type SantriProfileUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput> | SantriProfileCreateWithoutClassInput[] | SantriProfileUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SantriProfileCreateOrConnectWithoutClassInput | SantriProfileCreateOrConnectWithoutClassInput[]
    createMany?: SantriProfileCreateManyClassInputEnvelope
    connect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
  }

  export type DivisionUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<DivisionCreateWithoutClassesInput, DivisionUncheckedCreateWithoutClassesInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutClassesInput
    upsert?: DivisionUpsertWithoutClassesInput
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutClassesInput, DivisionUpdateWithoutClassesInput>, DivisionUncheckedUpdateWithoutClassesInput>
  }

  export type UserUpdateOneRequiredWithoutMentor_classesNestedInput = {
    create?: XOR<UserCreateWithoutMentor_classesInput, UserUncheckedCreateWithoutMentor_classesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentor_classesInput
    upsert?: UserUpsertWithoutMentor_classesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentor_classesInput, UserUpdateWithoutMentor_classesInput>, UserUncheckedUpdateWithoutMentor_classesInput>
  }

  export type AttendanceUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutClassNestedInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutClassInput | AssignmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutClassInput | AssignmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutClassInput | AssignmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type SantriProfileUpdateManyWithoutClassNestedInput = {
    create?: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput> | SantriProfileCreateWithoutClassInput[] | SantriProfileUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SantriProfileCreateOrConnectWithoutClassInput | SantriProfileCreateOrConnectWithoutClassInput[]
    upsert?: SantriProfileUpsertWithWhereUniqueWithoutClassInput | SantriProfileUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SantriProfileCreateManyClassInputEnvelope
    set?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    disconnect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    delete?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    connect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    update?: SantriProfileUpdateWithWhereUniqueWithoutClassInput | SantriProfileUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SantriProfileUpdateManyWithWhereWithoutClassInput | SantriProfileUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SantriProfileScalarWhereInput | SantriProfileScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutClassInput | AssignmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutClassInput | AssignmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutClassInput | AssignmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type SantriProfileUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput> | SantriProfileCreateWithoutClassInput[] | SantriProfileUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SantriProfileCreateOrConnectWithoutClassInput | SantriProfileCreateOrConnectWithoutClassInput[]
    upsert?: SantriProfileUpsertWithWhereUniqueWithoutClassInput | SantriProfileUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SantriProfileCreateManyClassInputEnvelope
    set?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    disconnect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    delete?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    connect?: SantriProfileWhereUniqueInput | SantriProfileWhereUniqueInput[]
    update?: SantriProfileUpdateWithWhereUniqueWithoutClassInput | SantriProfileUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SantriProfileUpdateManyWithWhereWithoutClassInput | SantriProfileUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SantriProfileScalarWhereInput | SantriProfileScalarWhereInput[]
  }

  export type ClassCreateNestedManyWithoutDivisionInput = {
    create?: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput> | ClassCreateWithoutDivisionInput[] | ClassUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutDivisionInput | ClassCreateOrConnectWithoutDivisionInput[]
    createMany?: ClassCreateManyDivisionInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput> | ClassCreateWithoutDivisionInput[] | ClassUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutDivisionInput | ClassCreateOrConnectWithoutDivisionInput[]
    createMany?: ClassCreateManyDivisionInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput> | ClassCreateWithoutDivisionInput[] | ClassUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutDivisionInput | ClassCreateOrConnectWithoutDivisionInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutDivisionInput | ClassUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: ClassCreateManyDivisionInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutDivisionInput | ClassUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutDivisionInput | ClassUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput> | ClassCreateWithoutDivisionInput[] | ClassUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutDivisionInput | ClassCreateOrConnectWithoutDivisionInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutDivisionInput | ClassUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: ClassCreateManyDivisionInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutDivisionInput | ClassUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutDivisionInput | ClassUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSantri_profileInput = {
    create?: XOR<UserCreateWithoutSantri_profileInput, UserUncheckedCreateWithoutSantri_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantri_profileInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutSantri_profilesInput = {
    create?: XOR<ClassCreateWithoutSantri_profilesInput, ClassUncheckedCreateWithoutSantri_profilesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSantri_profilesInput
    connect?: ClassWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSantri_profileNestedInput = {
    create?: XOR<UserCreateWithoutSantri_profileInput, UserUncheckedCreateWithoutSantri_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantri_profileInput
    upsert?: UserUpsertWithoutSantri_profileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantri_profileInput, UserUpdateWithoutSantri_profileInput>, UserUncheckedUpdateWithoutSantri_profileInput>
  }

  export type ClassUpdateOneWithoutSantri_profilesNestedInput = {
    create?: XOR<ClassCreateWithoutSantri_profilesInput, ClassUncheckedCreateWithoutSantri_profilesInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSantri_profilesInput
    upsert?: ClassUpsertWithoutSantri_profilesInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSantri_profilesInput, ClassUpdateWithoutSantri_profilesInput>, ClassUncheckedUpdateWithoutSantri_profilesInput>
  }

  export type VerificationCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type SantriProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SantriProfileCreateOrConnectWithoutUserInput
    connect?: SantriProfileWhereUniqueInput
  }

  export type ClassCreateNestedManyWithoutMentorInput = {
    create?: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput> | ClassCreateWithoutMentorInput[] | ClassUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutMentorInput | ClassCreateOrConnectWithoutMentorInput[]
    createMany?: ClassCreateManyMentorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutMentorInput = {
    create?: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput> | AttendanceCreateWithoutMentorInput[] | AttendanceUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMentorInput | AttendanceCreateOrConnectWithoutMentorInput[]
    createMany?: AttendanceCreateManyMentorInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutSantriInput = {
    create?: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput> | AttendanceCreateWithoutSantriInput[] | AttendanceUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSantriInput | AttendanceCreateOrConnectWithoutSantriInput[]
    createMany?: AttendanceCreateManySantriInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutMentorInput = {
    create?: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput> | AssignmentCreateWithoutMentorInput[] | AssignmentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutMentorInput | AssignmentCreateOrConnectWithoutMentorInput[]
    createMany?: AssignmentCreateManyMentorInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentContentCreateNestedManyWithoutSantriInput = {
    create?: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput> | AssignmentContentCreateWithoutSantriInput[] | AssignmentContentUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutSantriInput | AssignmentContentCreateOrConnectWithoutSantriInput[]
    createMany?: AssignmentContentCreateManySantriInputEnvelope
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
  }

  export type WaliSantriRelationCreateNestedManyWithoutWaliInput = {
    create?: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput> | WaliSantriRelationCreateWithoutWaliInput[] | WaliSantriRelationUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutWaliInput | WaliSantriRelationCreateOrConnectWithoutWaliInput[]
    createMany?: WaliSantriRelationCreateManyWaliInputEnvelope
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
  }

  export type WaliSantriRelationCreateNestedManyWithoutSantriInput = {
    create?: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput> | WaliSantriRelationCreateWithoutSantriInput[] | WaliSantriRelationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutSantriInput | WaliSantriRelationCreateOrConnectWithoutSantriInput[]
    createMany?: WaliSantriRelationCreateManySantriInputEnvelope
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
  }

  export type VerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type SantriProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SantriProfileCreateOrConnectWithoutUserInput
    connect?: SantriProfileWhereUniqueInput
  }

  export type ClassUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput> | ClassCreateWithoutMentorInput[] | ClassUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutMentorInput | ClassCreateOrConnectWithoutMentorInput[]
    createMany?: ClassCreateManyMentorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput> | AttendanceCreateWithoutMentorInput[] | AttendanceUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMentorInput | AttendanceCreateOrConnectWithoutMentorInput[]
    createMany?: AttendanceCreateManyMentorInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput> | AttendanceCreateWithoutSantriInput[] | AttendanceUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSantriInput | AttendanceCreateOrConnectWithoutSantriInput[]
    createMany?: AttendanceCreateManySantriInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput> | AssignmentCreateWithoutMentorInput[] | AssignmentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutMentorInput | AssignmentCreateOrConnectWithoutMentorInput[]
    createMany?: AssignmentCreateManyMentorInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentContentUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput> | AssignmentContentCreateWithoutSantriInput[] | AssignmentContentUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutSantriInput | AssignmentContentCreateOrConnectWithoutSantriInput[]
    createMany?: AssignmentContentCreateManySantriInputEnvelope
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
  }

  export type WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput = {
    create?: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput> | WaliSantriRelationCreateWithoutWaliInput[] | WaliSantriRelationUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutWaliInput | WaliSantriRelationCreateOrConnectWithoutWaliInput[]
    createMany?: WaliSantriRelationCreateManyWaliInputEnvelope
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
  }

  export type WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput = {
    create?: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput> | WaliSantriRelationCreateWithoutSantriInput[] | WaliSantriRelationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutSantriInput | WaliSantriRelationCreateOrConnectWithoutSantriInput[]
    createMany?: WaliSantriRelationCreateManySantriInputEnvelope
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VerificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutUserInput | VerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutUserInput | VerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutUserInput | VerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type SantriProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SantriProfileCreateOrConnectWithoutUserInput
    upsert?: SantriProfileUpsertWithoutUserInput
    disconnect?: SantriProfileWhereInput | boolean
    delete?: SantriProfileWhereInput | boolean
    connect?: SantriProfileWhereUniqueInput
    update?: XOR<XOR<SantriProfileUpdateToOneWithWhereWithoutUserInput, SantriProfileUpdateWithoutUserInput>, SantriProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClassUpdateManyWithoutMentorNestedInput = {
    create?: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput> | ClassCreateWithoutMentorInput[] | ClassUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutMentorInput | ClassCreateOrConnectWithoutMentorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutMentorInput | ClassUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: ClassCreateManyMentorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutMentorInput | ClassUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutMentorInput | ClassUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutMentorNestedInput = {
    create?: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput> | AttendanceCreateWithoutMentorInput[] | AttendanceUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMentorInput | AttendanceCreateOrConnectWithoutMentorInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutMentorInput | AttendanceUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: AttendanceCreateManyMentorInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutMentorInput | AttendanceUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutMentorInput | AttendanceUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutSantriNestedInput = {
    create?: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput> | AttendanceCreateWithoutSantriInput[] | AttendanceUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSantriInput | AttendanceCreateOrConnectWithoutSantriInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSantriInput | AttendanceUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: AttendanceCreateManySantriInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSantriInput | AttendanceUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSantriInput | AttendanceUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutMentorNestedInput = {
    create?: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput> | AssignmentCreateWithoutMentorInput[] | AssignmentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutMentorInput | AssignmentCreateOrConnectWithoutMentorInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutMentorInput | AssignmentUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: AssignmentCreateManyMentorInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutMentorInput | AssignmentUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutMentorInput | AssignmentUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentContentUpdateManyWithoutSantriNestedInput = {
    create?: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput> | AssignmentContentCreateWithoutSantriInput[] | AssignmentContentUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutSantriInput | AssignmentContentCreateOrConnectWithoutSantriInput[]
    upsert?: AssignmentContentUpsertWithWhereUniqueWithoutSantriInput | AssignmentContentUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: AssignmentContentCreateManySantriInputEnvelope
    set?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    disconnect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    delete?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    update?: AssignmentContentUpdateWithWhereUniqueWithoutSantriInput | AssignmentContentUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: AssignmentContentUpdateManyWithWhereWithoutSantriInput | AssignmentContentUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
  }

  export type WaliSantriRelationUpdateManyWithoutWaliNestedInput = {
    create?: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput> | WaliSantriRelationCreateWithoutWaliInput[] | WaliSantriRelationUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutWaliInput | WaliSantriRelationCreateOrConnectWithoutWaliInput[]
    upsert?: WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput | WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput[]
    createMany?: WaliSantriRelationCreateManyWaliInputEnvelope
    set?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    disconnect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    delete?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    update?: WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput | WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput[]
    updateMany?: WaliSantriRelationUpdateManyWithWhereWithoutWaliInput | WaliSantriRelationUpdateManyWithWhereWithoutWaliInput[]
    deleteMany?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
  }

  export type WaliSantriRelationUpdateManyWithoutSantriNestedInput = {
    create?: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput> | WaliSantriRelationCreateWithoutSantriInput[] | WaliSantriRelationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutSantriInput | WaliSantriRelationCreateOrConnectWithoutSantriInput[]
    upsert?: WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput | WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: WaliSantriRelationCreateManySantriInputEnvelope
    set?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    disconnect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    delete?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    update?: WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput | WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: WaliSantriRelationUpdateManyWithWhereWithoutSantriInput | WaliSantriRelationUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
  }

  export type VerificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutUserInput | VerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutUserInput | VerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutUserInput | VerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type SantriProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SantriProfileCreateOrConnectWithoutUserInput
    upsert?: SantriProfileUpsertWithoutUserInput
    disconnect?: SantriProfileWhereInput | boolean
    delete?: SantriProfileWhereInput | boolean
    connect?: SantriProfileWhereUniqueInput
    update?: XOR<XOR<SantriProfileUpdateToOneWithWhereWithoutUserInput, SantriProfileUpdateWithoutUserInput>, SantriProfileUncheckedUpdateWithoutUserInput>
  }

  export type ClassUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput> | ClassCreateWithoutMentorInput[] | ClassUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutMentorInput | ClassCreateOrConnectWithoutMentorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutMentorInput | ClassUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: ClassCreateManyMentorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutMentorInput | ClassUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutMentorInput | ClassUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput> | AttendanceCreateWithoutMentorInput[] | AttendanceUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMentorInput | AttendanceCreateOrConnectWithoutMentorInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutMentorInput | AttendanceUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: AttendanceCreateManyMentorInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutMentorInput | AttendanceUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutMentorInput | AttendanceUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput> | AttendanceCreateWithoutSantriInput[] | AttendanceUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSantriInput | AttendanceCreateOrConnectWithoutSantriInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSantriInput | AttendanceUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: AttendanceCreateManySantriInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSantriInput | AttendanceUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSantriInput | AttendanceUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput> | AssignmentCreateWithoutMentorInput[] | AssignmentUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutMentorInput | AssignmentCreateOrConnectWithoutMentorInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutMentorInput | AssignmentUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: AssignmentCreateManyMentorInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutMentorInput | AssignmentUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutMentorInput | AssignmentUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput> | AssignmentContentCreateWithoutSantriInput[] | AssignmentContentUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: AssignmentContentCreateOrConnectWithoutSantriInput | AssignmentContentCreateOrConnectWithoutSantriInput[]
    upsert?: AssignmentContentUpsertWithWhereUniqueWithoutSantriInput | AssignmentContentUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: AssignmentContentCreateManySantriInputEnvelope
    set?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    disconnect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    delete?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    connect?: AssignmentContentWhereUniqueInput | AssignmentContentWhereUniqueInput[]
    update?: AssignmentContentUpdateWithWhereUniqueWithoutSantriInput | AssignmentContentUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: AssignmentContentUpdateManyWithWhereWithoutSantriInput | AssignmentContentUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
  }

  export type WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput = {
    create?: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput> | WaliSantriRelationCreateWithoutWaliInput[] | WaliSantriRelationUncheckedCreateWithoutWaliInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutWaliInput | WaliSantriRelationCreateOrConnectWithoutWaliInput[]
    upsert?: WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput | WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput[]
    createMany?: WaliSantriRelationCreateManyWaliInputEnvelope
    set?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    disconnect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    delete?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    update?: WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput | WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput[]
    updateMany?: WaliSantriRelationUpdateManyWithWhereWithoutWaliInput | WaliSantriRelationUpdateManyWithWhereWithoutWaliInput[]
    deleteMany?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
  }

  export type WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput = {
    create?: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput> | WaliSantriRelationCreateWithoutSantriInput[] | WaliSantriRelationUncheckedCreateWithoutSantriInput[]
    connectOrCreate?: WaliSantriRelationCreateOrConnectWithoutSantriInput | WaliSantriRelationCreateOrConnectWithoutSantriInput[]
    upsert?: WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput | WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput[]
    createMany?: WaliSantriRelationCreateManySantriInputEnvelope
    set?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    disconnect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    delete?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    connect?: WaliSantriRelationWhereUniqueInput | WaliSantriRelationWhereUniqueInput[]
    update?: WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput | WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput[]
    updateMany?: WaliSantriRelationUpdateManyWithWhereWithoutSantriInput | WaliSantriRelationUpdateManyWithWhereWithoutSantriInput[]
    deleteMany?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWali_relationsInput = {
    create?: XOR<UserCreateWithoutWali_relationsInput, UserUncheckedCreateWithoutWali_relationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWali_relationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSantri_relationsInput = {
    create?: XOR<UserCreateWithoutSantri_relationsInput, UserUncheckedCreateWithoutSantri_relationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantri_relationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWaliSantriCategoryFieldUpdateOperationsInput = {
    set?: $Enums.WaliSantriCategory
  }

  export type UserUpdateOneRequiredWithoutWali_relationsNestedInput = {
    create?: XOR<UserCreateWithoutWali_relationsInput, UserUncheckedCreateWithoutWali_relationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWali_relationsInput
    upsert?: UserUpsertWithoutWali_relationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWali_relationsInput, UserUpdateWithoutWali_relationsInput>, UserUncheckedUpdateWithoutWali_relationsInput>
  }

  export type UserUpdateOneRequiredWithoutSantri_relationsNestedInput = {
    create?: XOR<UserCreateWithoutSantri_relationsInput, UserUncheckedCreateWithoutSantri_relationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSantri_relationsInput
    upsert?: UserUpsertWithoutSantri_relationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSantri_relationsInput, UserUpdateWithoutSantri_relationsInput>, UserUncheckedUpdateWithoutSantri_relationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSubmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionType | EnumSubmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionTypeFilter<$PrismaModel> | $Enums.SubmissionType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionType | EnumSubmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionType[] | ListEnumSubmissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubmissionTypeFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumGradingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GradingStatus | EnumGradingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradingStatusFilter<$PrismaModel> | $Enums.GradingStatus
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGradingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradingStatus | EnumGradingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GradingStatus[] | ListEnumGradingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGradingStatusWithAggregatesFilter<$PrismaModel> | $Enums.GradingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradingStatusFilter<$PrismaModel>
    _max?: NestedEnumGradingStatusFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWaliSantriCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.WaliSantriCategory | EnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWaliSantriCategoryFilter<$PrismaModel> | $Enums.WaliSantriCategory
  }

  export type NestedEnumWaliSantriCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaliSantriCategory | EnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaliSantriCategory[] | ListEnumWaliSantriCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumWaliSantriCategoryWithAggregatesFilter<$PrismaModel> | $Enums.WaliSantriCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaliSantriCategoryFilter<$PrismaModel>
    _max?: NestedEnumWaliSantriCategoryFilter<$PrismaModel>
  }

  export type UserCreateWithoutVerificationsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutVerificationsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
  }

  export type UserUpsertWithoutVerificationsInput = {
    update: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type ClassCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    created_at?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentor_classesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    division_id: string
    name: string
    mentor_id: string
    created_at?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAssignmentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutMentor_assignmentsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutMentor_assignmentsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutMentor_assignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentor_assignmentsInput, UserUncheckedCreateWithoutMentor_assignmentsInput>
  }

  export type AssignmentContentCreateWithoutAssignmentInput = {
    id?: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
    santri: UserCreateNestedOneWithoutSantri_submissionsInput
  }

  export type AssignmentContentUncheckedCreateWithoutAssignmentInput = {
    id?: string
    santri_id: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
  }

  export type AssignmentContentCreateOrConnectWithoutAssignmentInput = {
    where: AssignmentContentWhereUniqueInput
    create: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentContentCreateManyAssignmentInputEnvelope = {
    data: AssignmentContentCreateManyAssignmentInput | AssignmentContentCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutAssignmentsInput = {
    update: XOR<ClassUpdateWithoutAssignmentsInput, ClassUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAssignmentsInput, ClassUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ClassUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_classesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    division_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutMentor_assignmentsInput = {
    update: XOR<UserUpdateWithoutMentor_assignmentsInput, UserUncheckedUpdateWithoutMentor_assignmentsInput>
    create: XOR<UserCreateWithoutMentor_assignmentsInput, UserUncheckedCreateWithoutMentor_assignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentor_assignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentor_assignmentsInput, UserUncheckedUpdateWithoutMentor_assignmentsInput>
  }

  export type UserUpdateWithoutMentor_assignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutMentor_assignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type AssignmentContentUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentContentWhereUniqueInput
    update: XOR<AssignmentContentUpdateWithoutAssignmentInput, AssignmentContentUncheckedUpdateWithoutAssignmentInput>
    create: XOR<AssignmentContentCreateWithoutAssignmentInput, AssignmentContentUncheckedCreateWithoutAssignmentInput>
  }

  export type AssignmentContentUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: AssignmentContentWhereUniqueInput
    data: XOR<AssignmentContentUpdateWithoutAssignmentInput, AssignmentContentUncheckedUpdateWithoutAssignmentInput>
  }

  export type AssignmentContentUpdateManyWithWhereWithoutAssignmentInput = {
    where: AssignmentContentScalarWhereInput
    data: XOR<AssignmentContentUpdateManyMutationInput, AssignmentContentUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentContentScalarWhereInput = {
    AND?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
    OR?: AssignmentContentScalarWhereInput[]
    NOT?: AssignmentContentScalarWhereInput | AssignmentContentScalarWhereInput[]
    id?: StringFilter<"AssignmentContent"> | string
    assignment_id?: StringFilter<"AssignmentContent"> | string
    santri_id?: StringFilter<"AssignmentContent"> | string
    content_type?: EnumContentTypeFilter<"AssignmentContent"> | $Enums.ContentType
    file_url?: StringNullableListFilter<"AssignmentContent">
    score?: IntNullableFilter<"AssignmentContent"> | number | null
    mentor_feedback?: StringNullableFilter<"AssignmentContent"> | string | null
    status?: EnumGradingStatusFilter<"AssignmentContent"> | $Enums.GradingStatus
    submitted_at?: DateTimeFilter<"AssignmentContent"> | Date | string
  }

  export type AssignmentCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    mentor: UserCreateNestedOneWithoutMentor_assignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    class_id: string
    mentor_id: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutSantri_submissionsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutSantri_submissionsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutSantri_submissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantri_submissionsInput, UserUncheckedCreateWithoutSantri_submissionsInput>
  }

  export type AssignmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_assignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSantri_submissionsInput = {
    update: XOR<UserUpdateWithoutSantri_submissionsInput, UserUncheckedUpdateWithoutSantri_submissionsInput>
    create: XOR<UserCreateWithoutSantri_submissionsInput, UserUncheckedCreateWithoutSantri_submissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantri_submissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantri_submissionsInput, UserUncheckedUpdateWithoutSantri_submissionsInput>
  }

  export type UserUpdateWithoutSantri_submissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutSantri_submissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type ClassCreateWithoutAttendancesInput = {
    id?: string
    name: string
    created_at?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentor_classesInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendancesInput = {
    id?: string
    division_id: string
    name: string
    mentor_id: string
    created_at?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAttendancesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
  }

  export type UserCreateWithoutSantri_attendancesInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutSantri_attendancesInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutSantri_attendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantri_attendancesInput, UserUncheckedCreateWithoutSantri_attendancesInput>
  }

  export type UserCreateWithoutMentor_attendancesInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutMentor_attendancesInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutMentor_attendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentor_attendancesInput, UserUncheckedCreateWithoutMentor_attendancesInput>
  }

  export type ClassUpsertWithoutAttendancesInput = {
    update: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ClassCreateWithoutAttendancesInput, ClassUncheckedCreateWithoutAttendancesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAttendancesInput, ClassUncheckedUpdateWithoutAttendancesInput>
  }

  export type ClassUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_classesNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    division_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutSantri_attendancesInput = {
    update: XOR<UserUpdateWithoutSantri_attendancesInput, UserUncheckedUpdateWithoutSantri_attendancesInput>
    create: XOR<UserCreateWithoutSantri_attendancesInput, UserUncheckedCreateWithoutSantri_attendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantri_attendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantri_attendancesInput, UserUncheckedUpdateWithoutSantri_attendancesInput>
  }

  export type UserUpdateWithoutSantri_attendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutSantri_attendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserUpsertWithoutMentor_attendancesInput = {
    update: XOR<UserUpdateWithoutMentor_attendancesInput, UserUncheckedUpdateWithoutMentor_attendancesInput>
    create: XOR<UserCreateWithoutMentor_attendancesInput, UserUncheckedCreateWithoutMentor_attendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentor_attendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentor_attendancesInput, UserUncheckedUpdateWithoutMentor_attendancesInput>
  }

  export type UserUpdateWithoutMentor_attendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutMentor_attendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type DivisionCreateWithoutClassesInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
  }

  export type DivisionUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
  }

  export type DivisionCreateOrConnectWithoutClassesInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutClassesInput, DivisionUncheckedCreateWithoutClassesInput>
  }

  export type UserCreateWithoutMentor_classesInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutMentor_classesInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutMentor_classesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentor_classesInput, UserUncheckedCreateWithoutMentor_classesInput>
  }

  export type AttendanceCreateWithoutClassInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
    santri: UserCreateNestedOneWithoutSantri_attendancesInput
    mentor: UserCreateNestedOneWithoutMentor_attendancesInput
  }

  export type AttendanceUncheckedCreateWithoutClassInput = {
    id?: string
    santri_id: string
    mentor_id: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceCreateManyClassInputEnvelope = {
    data: AttendanceCreateManyClassInput | AttendanceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutClassInput = {
    id?: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
    mentor: UserCreateNestedOneWithoutMentor_assignmentsInput
    submissions?: AssignmentContentCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutClassInput = {
    id?: string
    mentor_id: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
    submissions?: AssignmentContentUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput>
  }

  export type AssignmentCreateManyClassInputEnvelope = {
    data: AssignmentCreateManyClassInput | AssignmentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type SantriProfileCreateWithoutClassInput = {
    id?: string
    nis: string
    birth_date?: Date | string | null
    address?: string | null
    photo_url?: string | null
    user: UserCreateNestedOneWithoutSantri_profileInput
  }

  export type SantriProfileUncheckedCreateWithoutClassInput = {
    id?: string
    user_id: string
    nis: string
    birth_date?: Date | string | null
    address?: string | null
    photo_url?: string | null
  }

  export type SantriProfileCreateOrConnectWithoutClassInput = {
    where: SantriProfileWhereUniqueInput
    create: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput>
  }

  export type SantriProfileCreateManyClassInputEnvelope = {
    data: SantriProfileCreateManyClassInput | SantriProfileCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type DivisionUpsertWithoutClassesInput = {
    update: XOR<DivisionUpdateWithoutClassesInput, DivisionUncheckedUpdateWithoutClassesInput>
    create: XOR<DivisionCreateWithoutClassesInput, DivisionUncheckedCreateWithoutClassesInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutClassesInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutClassesInput, DivisionUncheckedUpdateWithoutClassesInput>
  }

  export type DivisionUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisionUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMentor_classesInput = {
    update: XOR<UserUpdateWithoutMentor_classesInput, UserUncheckedUpdateWithoutMentor_classesInput>
    create: XOR<UserCreateWithoutMentor_classesInput, UserUncheckedCreateWithoutMentor_classesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentor_classesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentor_classesInput, UserUncheckedUpdateWithoutMentor_classesInput>
  }

  export type UserUpdateWithoutMentor_classesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutMentor_classesInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutClassInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutClassInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    class_id?: StringFilter<"Attendance"> | string
    santri_id?: StringFilter<"Attendance"> | string
    mentor_id?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    notes?: StringNullableFilter<"Attendance"> | string | null
    image_url?: StringNullableFilter<"Attendance"> | string | null
    created_at?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutClassInput, AssignmentUncheckedUpdateWithoutClassInput>
    create: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutClassInput, AssignmentUncheckedUpdateWithoutClassInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutClassInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutClassInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    class_id?: StringFilter<"Assignment"> | string
    mentor_id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    submission_type?: EnumSubmissionTypeFilter<"Assignment"> | $Enums.SubmissionType
    attachment_url?: StringNullableFilter<"Assignment"> | string | null
    due_date?: DateTimeFilter<"Assignment"> | Date | string
    created_at?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type SantriProfileUpsertWithWhereUniqueWithoutClassInput = {
    where: SantriProfileWhereUniqueInput
    update: XOR<SantriProfileUpdateWithoutClassInput, SantriProfileUncheckedUpdateWithoutClassInput>
    create: XOR<SantriProfileCreateWithoutClassInput, SantriProfileUncheckedCreateWithoutClassInput>
  }

  export type SantriProfileUpdateWithWhereUniqueWithoutClassInput = {
    where: SantriProfileWhereUniqueInput
    data: XOR<SantriProfileUpdateWithoutClassInput, SantriProfileUncheckedUpdateWithoutClassInput>
  }

  export type SantriProfileUpdateManyWithWhereWithoutClassInput = {
    where: SantriProfileScalarWhereInput
    data: XOR<SantriProfileUpdateManyMutationInput, SantriProfileUncheckedUpdateManyWithoutClassInput>
  }

  export type SantriProfileScalarWhereInput = {
    AND?: SantriProfileScalarWhereInput | SantriProfileScalarWhereInput[]
    OR?: SantriProfileScalarWhereInput[]
    NOT?: SantriProfileScalarWhereInput | SantriProfileScalarWhereInput[]
    id?: StringFilter<"SantriProfile"> | string
    user_id?: StringFilter<"SantriProfile"> | string
    nis?: StringFilter<"SantriProfile"> | string
    birth_date?: DateTimeNullableFilter<"SantriProfile"> | Date | string | null
    address?: StringNullableFilter<"SantriProfile"> | string | null
    photo_url?: StringNullableFilter<"SantriProfile"> | string | null
    class_id?: StringNullableFilter<"SantriProfile"> | string | null
  }

  export type ClassCreateWithoutDivisionInput = {
    id?: string
    name: string
    created_at?: Date | string
    mentor: UserCreateNestedOneWithoutMentor_classesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutDivisionInput = {
    id?: string
    name: string
    mentor_id: string
    created_at?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutDivisionInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput>
  }

  export type ClassCreateManyDivisionInputEnvelope = {
    data: ClassCreateManyDivisionInput | ClassCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutDivisionInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutDivisionInput, ClassUncheckedUpdateWithoutDivisionInput>
    create: XOR<ClassCreateWithoutDivisionInput, ClassUncheckedCreateWithoutDivisionInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutDivisionInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutDivisionInput, ClassUncheckedUpdateWithoutDivisionInput>
  }

  export type ClassUpdateManyWithWhereWithoutDivisionInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutDivisionInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    division_id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    mentor_id?: StringFilter<"Class"> | string
    created_at?: DateTimeFilter<"Class"> | Date | string
  }

  export type UserCreateWithoutSantri_profileInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutSantri_profileInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutSantri_profileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantri_profileInput, UserUncheckedCreateWithoutSantri_profileInput>
  }

  export type ClassCreateWithoutSantri_profilesInput = {
    id?: string
    name: string
    created_at?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    mentor: UserCreateNestedOneWithoutMentor_classesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSantri_profilesInput = {
    id?: string
    division_id: string
    name: string
    mentor_id: string
    created_at?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSantri_profilesInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSantri_profilesInput, ClassUncheckedCreateWithoutSantri_profilesInput>
  }

  export type UserUpsertWithoutSantri_profileInput = {
    update: XOR<UserUpdateWithoutSantri_profileInput, UserUncheckedUpdateWithoutSantri_profileInput>
    create: XOR<UserCreateWithoutSantri_profileInput, UserUncheckedCreateWithoutSantri_profileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantri_profileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantri_profileInput, UserUncheckedUpdateWithoutSantri_profileInput>
  }

  export type UserUpdateWithoutSantri_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutSantri_profileInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type ClassUpsertWithoutSantri_profilesInput = {
    update: XOR<ClassUpdateWithoutSantri_profilesInput, ClassUncheckedUpdateWithoutSantri_profilesInput>
    create: XOR<ClassCreateWithoutSantri_profilesInput, ClassUncheckedCreateWithoutSantri_profilesInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutSantri_profilesInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutSantri_profilesInput, ClassUncheckedUpdateWithoutSantri_profilesInput>
  }

  export type ClassUpdateWithoutSantri_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_classesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSantri_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    division_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type VerificationCreateWithoutUserInput = {
    id?: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationUncheckedCreateWithoutUserInput = {
    id?: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type VerificationCreateOrConnectWithoutUserInput = {
    where: VerificationWhereUniqueInput
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type VerificationCreateManyUserInputEnvelope = {
    data: VerificationCreateManyUserInput | VerificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SantriProfileCreateWithoutUserInput = {
    id?: string
    nis: string
    birth_date?: Date | string | null
    address?: string | null
    photo_url?: string | null
    class?: ClassCreateNestedOneWithoutSantri_profilesInput
  }

  export type SantriProfileUncheckedCreateWithoutUserInput = {
    id?: string
    nis: string
    birth_date?: Date | string | null
    address?: string | null
    photo_url?: string | null
    class_id?: string | null
  }

  export type SantriProfileCreateOrConnectWithoutUserInput = {
    where: SantriProfileWhereUniqueInput
    create: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
  }

  export type ClassCreateWithoutMentorInput = {
    id?: string
    name: string
    created_at?: Date | string
    division: DivisionCreateNestedOneWithoutClassesInput
    attendances?: AttendanceCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutMentorInput = {
    id?: string
    division_id: string
    name: string
    created_at?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    santri_profiles?: SantriProfileUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutMentorInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput>
  }

  export type ClassCreateManyMentorInputEnvelope = {
    data: ClassCreateManyMentorInput | ClassCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutMentorInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    santri: UserCreateNestedOneWithoutSantri_attendancesInput
  }

  export type AttendanceUncheckedCreateWithoutMentorInput = {
    id?: string
    class_id: string
    santri_id: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutMentorInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput>
  }

  export type AttendanceCreateManyMentorInputEnvelope = {
    data: AttendanceCreateManyMentorInput | AttendanceCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutSantriInput = {
    id?: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAttendancesInput
    mentor: UserCreateNestedOneWithoutMentor_attendancesInput
  }

  export type AttendanceUncheckedCreateWithoutSantriInput = {
    id?: string
    class_id: string
    mentor_id: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutSantriInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput>
  }

  export type AttendanceCreateManySantriInputEnvelope = {
    data: AttendanceCreateManySantriInput | AttendanceCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutMentorInput = {
    id?: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    submissions?: AssignmentContentCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutMentorInput = {
    id?: string
    class_id: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
    submissions?: AssignmentContentUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutMentorInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput>
  }

  export type AssignmentCreateManyMentorInputEnvelope = {
    data: AssignmentCreateManyMentorInput | AssignmentCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentContentCreateWithoutSantriInput = {
    id?: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
  }

  export type AssignmentContentUncheckedCreateWithoutSantriInput = {
    id?: string
    assignment_id: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
  }

  export type AssignmentContentCreateOrConnectWithoutSantriInput = {
    where: AssignmentContentWhereUniqueInput
    create: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput>
  }

  export type AssignmentContentCreateManySantriInputEnvelope = {
    data: AssignmentContentCreateManySantriInput | AssignmentContentCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type WaliSantriRelationCreateWithoutWaliInput = {
    id?: string
    category?: $Enums.WaliSantriCategory
    santri: UserCreateNestedOneWithoutSantri_relationsInput
  }

  export type WaliSantriRelationUncheckedCreateWithoutWaliInput = {
    id?: string
    santri_id: string
    category?: $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationCreateOrConnectWithoutWaliInput = {
    where: WaliSantriRelationWhereUniqueInput
    create: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput>
  }

  export type WaliSantriRelationCreateManyWaliInputEnvelope = {
    data: WaliSantriRelationCreateManyWaliInput | WaliSantriRelationCreateManyWaliInput[]
    skipDuplicates?: boolean
  }

  export type WaliSantriRelationCreateWithoutSantriInput = {
    id?: string
    category?: $Enums.WaliSantriCategory
    wali: UserCreateNestedOneWithoutWali_relationsInput
  }

  export type WaliSantriRelationUncheckedCreateWithoutSantriInput = {
    id?: string
    wali_id: string
    category?: $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationCreateOrConnectWithoutSantriInput = {
    where: WaliSantriRelationWhereUniqueInput
    create: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput>
  }

  export type WaliSantriRelationCreateManySantriInputEnvelope = {
    data: WaliSantriRelationCreateManySantriInput | WaliSantriRelationCreateManySantriInput[]
    skipDuplicates?: boolean
  }

  export type VerificationUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationWhereUniqueInput
    update: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type VerificationUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationWhereUniqueInput
    data: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
  }

  export type VerificationUpdateManyWithWhereWithoutUserInput = {
    where: VerificationScalarWhereInput
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationScalarWhereInput = {
    AND?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    OR?: VerificationScalarWhereInput[]
    NOT?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    id?: StringFilter<"Verification"> | string
    user_id?: StringFilter<"Verification"> | string
    otpCode?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type SantriProfileUpsertWithoutUserInput = {
    update: XOR<SantriProfileUpdateWithoutUserInput, SantriProfileUncheckedUpdateWithoutUserInput>
    create: XOR<SantriProfileCreateWithoutUserInput, SantriProfileUncheckedCreateWithoutUserInput>
    where?: SantriProfileWhereInput
  }

  export type SantriProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: SantriProfileWhereInput
    data: XOR<SantriProfileUpdateWithoutUserInput, SantriProfileUncheckedUpdateWithoutUserInput>
  }

  export type SantriProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneWithoutSantri_profilesNestedInput
  }

  export type SantriProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    class_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUpsertWithWhereUniqueWithoutMentorInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutMentorInput, ClassUncheckedUpdateWithoutMentorInput>
    create: XOR<ClassCreateWithoutMentorInput, ClassUncheckedCreateWithoutMentorInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutMentorInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutMentorInput, ClassUncheckedUpdateWithoutMentorInput>
  }

  export type ClassUpdateManyWithWhereWithoutMentorInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutMentorInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutMentorInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutMentorInput, AttendanceUncheckedUpdateWithoutMentorInput>
    create: XOR<AttendanceCreateWithoutMentorInput, AttendanceUncheckedCreateWithoutMentorInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutMentorInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutMentorInput, AttendanceUncheckedUpdateWithoutMentorInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutMentorInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutMentorInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutSantriInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutSantriInput, AttendanceUncheckedUpdateWithoutSantriInput>
    create: XOR<AttendanceCreateWithoutSantriInput, AttendanceUncheckedCreateWithoutSantriInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutSantriInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutSantriInput, AttendanceUncheckedUpdateWithoutSantriInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutSantriInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutSantriInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutMentorInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutMentorInput, AssignmentUncheckedUpdateWithoutMentorInput>
    create: XOR<AssignmentCreateWithoutMentorInput, AssignmentUncheckedCreateWithoutMentorInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutMentorInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutMentorInput, AssignmentUncheckedUpdateWithoutMentorInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutMentorInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutMentorInput>
  }

  export type AssignmentContentUpsertWithWhereUniqueWithoutSantriInput = {
    where: AssignmentContentWhereUniqueInput
    update: XOR<AssignmentContentUpdateWithoutSantriInput, AssignmentContentUncheckedUpdateWithoutSantriInput>
    create: XOR<AssignmentContentCreateWithoutSantriInput, AssignmentContentUncheckedCreateWithoutSantriInput>
  }

  export type AssignmentContentUpdateWithWhereUniqueWithoutSantriInput = {
    where: AssignmentContentWhereUniqueInput
    data: XOR<AssignmentContentUpdateWithoutSantriInput, AssignmentContentUncheckedUpdateWithoutSantriInput>
  }

  export type AssignmentContentUpdateManyWithWhereWithoutSantriInput = {
    where: AssignmentContentScalarWhereInput
    data: XOR<AssignmentContentUpdateManyMutationInput, AssignmentContentUncheckedUpdateManyWithoutSantriInput>
  }

  export type WaliSantriRelationUpsertWithWhereUniqueWithoutWaliInput = {
    where: WaliSantriRelationWhereUniqueInput
    update: XOR<WaliSantriRelationUpdateWithoutWaliInput, WaliSantriRelationUncheckedUpdateWithoutWaliInput>
    create: XOR<WaliSantriRelationCreateWithoutWaliInput, WaliSantriRelationUncheckedCreateWithoutWaliInput>
  }

  export type WaliSantriRelationUpdateWithWhereUniqueWithoutWaliInput = {
    where: WaliSantriRelationWhereUniqueInput
    data: XOR<WaliSantriRelationUpdateWithoutWaliInput, WaliSantriRelationUncheckedUpdateWithoutWaliInput>
  }

  export type WaliSantriRelationUpdateManyWithWhereWithoutWaliInput = {
    where: WaliSantriRelationScalarWhereInput
    data: XOR<WaliSantriRelationUpdateManyMutationInput, WaliSantriRelationUncheckedUpdateManyWithoutWaliInput>
  }

  export type WaliSantriRelationScalarWhereInput = {
    AND?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
    OR?: WaliSantriRelationScalarWhereInput[]
    NOT?: WaliSantriRelationScalarWhereInput | WaliSantriRelationScalarWhereInput[]
    id?: StringFilter<"WaliSantriRelation"> | string
    wali_id?: StringFilter<"WaliSantriRelation"> | string
    santri_id?: StringFilter<"WaliSantriRelation"> | string
    category?: EnumWaliSantriCategoryFilter<"WaliSantriRelation"> | $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationUpsertWithWhereUniqueWithoutSantriInput = {
    where: WaliSantriRelationWhereUniqueInput
    update: XOR<WaliSantriRelationUpdateWithoutSantriInput, WaliSantriRelationUncheckedUpdateWithoutSantriInput>
    create: XOR<WaliSantriRelationCreateWithoutSantriInput, WaliSantriRelationUncheckedCreateWithoutSantriInput>
  }

  export type WaliSantriRelationUpdateWithWhereUniqueWithoutSantriInput = {
    where: WaliSantriRelationWhereUniqueInput
    data: XOR<WaliSantriRelationUpdateWithoutSantriInput, WaliSantriRelationUncheckedUpdateWithoutSantriInput>
  }

  export type WaliSantriRelationUpdateManyWithWhereWithoutSantriInput = {
    where: WaliSantriRelationScalarWhereInput
    data: XOR<WaliSantriRelationUpdateManyMutationInput, WaliSantriRelationUncheckedUpdateManyWithoutSantriInput>
  }

  export type UserCreateWithoutWali_relationsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    santri_relations?: WaliSantriRelationCreateNestedManyWithoutSantriInput
  }

  export type UserUncheckedCreateWithoutWali_relationsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    santri_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutSantriInput
  }

  export type UserCreateOrConnectWithoutWali_relationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWali_relationsInput, UserUncheckedCreateWithoutWali_relationsInput>
  }

  export type UserCreateWithoutSantri_relationsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileCreateNestedOneWithoutUserInput
    mentor_classes?: ClassCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationCreateNestedManyWithoutWaliInput
  }

  export type UserUncheckedCreateWithoutSantri_relationsInput = {
    id?: string
    full_name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    is_active?: boolean
    created_at?: Date | string
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
    santri_profile?: SantriProfileUncheckedCreateNestedOneWithoutUserInput
    mentor_classes?: ClassUncheckedCreateNestedManyWithoutMentorInput
    mentor_attendances?: AttendanceUncheckedCreateNestedManyWithoutMentorInput
    santri_attendances?: AttendanceUncheckedCreateNestedManyWithoutSantriInput
    mentor_assignments?: AssignmentUncheckedCreateNestedManyWithoutMentorInput
    santri_submissions?: AssignmentContentUncheckedCreateNestedManyWithoutSantriInput
    wali_relations?: WaliSantriRelationUncheckedCreateNestedManyWithoutWaliInput
  }

  export type UserCreateOrConnectWithoutSantri_relationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSantri_relationsInput, UserUncheckedCreateWithoutSantri_relationsInput>
  }

  export type UserUpsertWithoutWali_relationsInput = {
    update: XOR<UserUpdateWithoutWali_relationsInput, UserUncheckedUpdateWithoutWali_relationsInput>
    create: XOR<UserCreateWithoutWali_relationsInput, UserUncheckedCreateWithoutWali_relationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWali_relationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWali_relationsInput, UserUncheckedUpdateWithoutWali_relationsInput>
  }

  export type UserUpdateWithoutWali_relationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    santri_relations?: WaliSantriRelationUpdateManyWithoutSantriNestedInput
  }

  export type UserUncheckedUpdateWithoutWali_relationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    santri_relations?: WaliSantriRelationUncheckedUpdateManyWithoutSantriNestedInput
  }

  export type UserUpsertWithoutSantri_relationsInput = {
    update: XOR<UserUpdateWithoutSantri_relationsInput, UserUncheckedUpdateWithoutSantri_relationsInput>
    create: XOR<UserCreateWithoutSantri_relationsInput, UserUncheckedCreateWithoutSantri_relationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSantri_relationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSantri_relationsInput, UserUncheckedUpdateWithoutSantri_relationsInput>
  }

  export type UserUpdateWithoutSantri_relationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUpdateManyWithoutWaliNestedInput
  }

  export type UserUncheckedUpdateWithoutSantri_relationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
    santri_profile?: SantriProfileUncheckedUpdateOneWithoutUserNestedInput
    mentor_classes?: ClassUncheckedUpdateManyWithoutMentorNestedInput
    mentor_attendances?: AttendanceUncheckedUpdateManyWithoutMentorNestedInput
    santri_attendances?: AttendanceUncheckedUpdateManyWithoutSantriNestedInput
    mentor_assignments?: AssignmentUncheckedUpdateManyWithoutMentorNestedInput
    santri_submissions?: AssignmentContentUncheckedUpdateManyWithoutSantriNestedInput
    wali_relations?: WaliSantriRelationUncheckedUpdateManyWithoutWaliNestedInput
  }

  export type AssignmentContentCreateManyAssignmentInput = {
    id?: string
    santri_id: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
  }

  export type AssignmentContentUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: UserUpdateOneRequiredWithoutSantri_submissionsNestedInput
  }

  export type AssignmentContentUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyClassInput = {
    id?: string
    santri_id: string
    mentor_id: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type AssignmentCreateManyClassInput = {
    id?: string
    mentor_id: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
  }

  export type SantriProfileCreateManyClassInput = {
    id?: string
    user_id: string
    nis: string
    birth_date?: Date | string | null
    address?: string | null
    photo_url?: string | null
  }

  export type AttendanceUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    santri?: UserUpdateOneRequiredWithoutSantri_attendancesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_attendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneRequiredWithoutMentor_assignmentsNestedInput
    submissions?: AssignmentContentUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentContentUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SantriProfileUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSantri_profileNestedInput
  }

  export type SantriProfileUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SantriProfileUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    nis?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassCreateManyDivisionInput = {
    id?: string
    name: string
    mentor_id: string
    created_at?: Date | string
  }

  export type ClassUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneRequiredWithoutMentor_classesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutDivisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyUserInput = {
    id?: string
    otpCode: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ClassCreateManyMentorInput = {
    id?: string
    division_id: string
    name: string
    created_at?: Date | string
  }

  export type AttendanceCreateManyMentorInput = {
    id?: string
    class_id: string
    santri_id: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type AttendanceCreateManySantriInput = {
    id?: string
    class_id: string
    mentor_id: string
    date: Date | string
    status: $Enums.AttendanceStatus
    notes?: string | null
    image_url?: string | null
    created_at?: Date | string
  }

  export type AssignmentCreateManyMentorInput = {
    id?: string
    class_id: string
    title: string
    description?: string | null
    submission_type: $Enums.SubmissionType
    attachment_url?: string | null
    due_date: Date | string
    created_at?: Date | string
  }

  export type AssignmentContentCreateManySantriInput = {
    id?: string
    assignment_id: string
    content_type: $Enums.ContentType
    file_url?: AssignmentContentCreatefile_urlInput | string[]
    score?: number | null
    mentor_feedback?: string | null
    status?: $Enums.GradingStatus
    submitted_at?: Date | string
  }

  export type WaliSantriRelationCreateManyWaliInput = {
    id?: string
    santri_id: string
    category?: $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationCreateManySantriInput = {
    id?: string
    wali_id: string
    category?: $Enums.WaliSantriCategory
  }

  export type VerificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otpCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    division?: DivisionUpdateOneRequiredWithoutClassesNestedInput
    attendances?: AttendanceUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    division_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    santri_profiles?: SantriProfileUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    division_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    santri?: UserUpdateOneRequiredWithoutSantri_attendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAttendancesNestedInput
    mentor?: UserUpdateOneRequiredWithoutMentor_attendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    mentor_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: AssignmentContentUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AssignmentContentUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submission_type?: EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AssignmentContentUncheckedUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignment_id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentContentUncheckedUpdateManyWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignment_id?: StringFieldUpdateOperationsInput | string
    content_type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    file_url?: AssignmentContentUpdatefile_urlInput | string[]
    score?: NullableIntFieldUpdateOperationsInput | number | null
    mentor_feedback?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumGradingStatusFieldUpdateOperationsInput | $Enums.GradingStatus
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaliSantriRelationUpdateWithoutWaliInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    santri?: UserUpdateOneRequiredWithoutSantri_relationsNestedInput
  }

  export type WaliSantriRelationUncheckedUpdateWithoutWaliInput = {
    id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationUncheckedUpdateManyWithoutWaliInput = {
    id?: StringFieldUpdateOperationsInput | string
    santri_id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
    wali?: UserUpdateOneRequiredWithoutWali_relationsNestedInput
  }

  export type WaliSantriRelationUncheckedUpdateWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    wali_id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
  }

  export type WaliSantriRelationUncheckedUpdateManyWithoutSantriInput = {
    id?: StringFieldUpdateOperationsInput | string
    wali_id?: StringFieldUpdateOperationsInput | string
    category?: EnumWaliSantriCategoryFieldUpdateOperationsInput | $Enums.WaliSantriCategory
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
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MENTOR', 'SANTRI', 'WALI_SANTRI');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('HADIR', 'SAKIT', 'IZIN', 'ALFA');

-- CreateEnum
CREATE TYPE "SubmissionType" AS ENUM ('TEXT', 'FILE');

-- CreateEnum
CREATE TYPE "GradingStatus" AS ENUM ('PENDING', 'GRADED');

-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('VIDEO', 'FOTO', 'TEXT');

-- CreateEnum
CREATE TYPE "WaliSantriCategory" AS ENUM ('AYAH', 'IBU', 'OTHER');

import { RowDataPacket } from 'mysql2';

interface iNewLesson {
  startTime: string | null,
  endTime: string | null,
  duration: null | null,
  courseId: number,
  subjectId: number,
  teacherId: number,
  roomId: number,
  comment: string | null;
  createdBy: number,
}

interface dbLesson extends iNewLesson {
  id: number;
}

interface iLesson extends iNewLesson, RowDataPacket {
  id: number;
  dateCreated?: Date;
  dateUpdated?: Date;
  dateDeleted?: Date | null;
}

interface iUpdateLesson {
  id: number,
  startTime?: string | null,
  endTime?: string | null,
  duration?: null | null,
  courseId?: number,
  subjectId?: number,
  teacherId?: number,
  roomId?: number,
  comment?: string | null;
}

export {
  iNewLesson, dbLesson, iLesson, iUpdateLesson,
};

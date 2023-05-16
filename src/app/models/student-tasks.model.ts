export interface StudentTask
{
  student_id: number,
  task_id: number,
  task_number: number,
  course: string,
  topic: string,
  review_score: number,
  review_status: boolean,
  content_download_link: string,
  studnet_folder_upload_link: string
}

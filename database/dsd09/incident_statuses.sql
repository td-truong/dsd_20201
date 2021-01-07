/*
    This file was automatically generated by Studio 3T.

    Collection:  (luandz@it4483.cf:27017) > luoi_dien > incident_statuses

    Warnings about type conversion issues are stored as comments above the
    corresponding INSERT statement of each document.
*/


SET NAMES 'utf8' COLLATE 'utf8_general_ci';

DROP TABLE IF EXISTS `incident_statuses`;
CREATE TABLE `incident_statuses` (
    `_id` VARBINARY(12) NOT NULL,
    `name` LONGTEXT,
    `code` INTEGER,
    `__v` INTEGER,
    `createdAt` DATETIME,
    `updatedAt` DATETIME,
    PRIMARY KEY (`_id`)
) CHARSET=utf8mb4;

INSERT INTO `incident_statuses` (`_id`, `name`, `code`, `__v`, `createdAt`, `updatedAt`)
    VALUES
        (x'5FBA2E79A1E657329C688903', 'Mở', 0, 0, '2020-11-22 09:25:14.005000', '2020-12-28 18:34:05.107000');
INSERT INTO `incident_statuses` (`_id`, `name`, `code`, `__v`, `createdAt`, `updatedAt`)
    VALUES
        (x'5FBA2E7AA1E657329C688904', 'Đang xử lý', 1, 0, '2020-11-22 09:25:14.006000', '2020-12-28 18:38:21.379000');
INSERT INTO `incident_statuses` (`_id`, `name`, `code`, `__v`, `createdAt`, `updatedAt`)
    VALUES
        (x'5FBA2E7AA1E657329C688905', 'Đã giải quyết', 2, 0, '2020-11-22 09:25:14.006000', '2020-12-28 18:34:56.443000');